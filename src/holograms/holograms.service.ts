import { Injectable, NotFoundException } from "@nestjs/common";
import { Hologram } from "./entities/hologram.entity";
import { UpdateHologramDto } from "./dto/update-hologram.dto";
import { CreateHologramDto } from "./dto/create-hologram.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Tag } from "./entities/tag.entity";
import { PaginationQueryDto } from "src/common/dto/pagination-query.dto";

@Injectable()
export class HologramsService {
  constructor(
    @InjectRepository(Hologram)
    private readonly hologramsRepository: Repository<Hologram>,
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async findAll(paginationQuery: PaginationQueryDto): Promise<Hologram[]> {
    const { limit, offset } = paginationQuery;
    return this.hologramsRepository.find({
      relations: ["tags"],
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: number) {
    // const hologram = await this.hologramsRepository.findOneBy({ id: id });
    const hologram = await this.hologramsRepository.findOne({
      where: { id: id },
      relations: ["tags"],
    });

    if (!hologram) {
      throw new NotFoundException(`hologram #${id} not found`);
    }
    return hologram;
  }

  async create(createHologramDto: CreateHologramDto) {
    const tags = await Promise.all(
      createHologramDto.tags.map((name) => this.preloadTagByName(name)),
    );

    const hologram = this.hologramsRepository.create({
      ...createHologramDto,
      tags,
    });

    return this.hologramsRepository.save(hologram);
  }

  async update(id: number, updateHologramDto: UpdateHologramDto) {
    const tags =
      updateHologramDto.tags &&
      (await Promise.all(
        updateHologramDto.tags.map((name) => this.preloadTagByName(name)),
      ));

    const hologram = await this.hologramsRepository.preload({
      id: +id,
      ...updateHologramDto,
      tags,
    });

    if (!hologram) {
      throw new NotFoundException(`hologram #${id} not found`);
    }

    return this.hologramsRepository.save(hologram);
  }

  async remove(id: number) {
    const hologram = await this.findOne(id);

    return this.hologramsRepository.remove(hologram);
  }

  private async preloadTagByName(name: string): Promise<Tag> {
    const existingTag = await this.tagRepository.findOne({
      where: { name: name },
    });

    if (existingTag) {
      return existingTag;
    }

    return this.tagRepository.create({ name });
  }
}
