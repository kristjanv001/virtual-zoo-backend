import { Injectable, NotFoundException } from '@nestjs/common';
import { Hologram } from './entities/hologram.entity';
import { UpdateHologramDto } from './dto/update-hologram.dto';
import { CreateHologramDto } from './dto/create-hologram.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HologramsService {
  constructor(
    @InjectRepository(Hologram)
    private readonly hologramsRepository: Repository<Hologram>,
  ) {}

  async findAll(): Promise<Hologram[]> {
    return await this.hologramsRepository.find();
  }

  async findOne(id: number) {
    const hologram = await this.hologramsRepository.findOneBy({ id: id });

    if (!hologram) {
      throw new NotFoundException(`hologram #${id} not found`);
    }
    return hologram;
  }

  create(createHologramDto: CreateHologramDto) {
    const hologram = this.hologramsRepository.create(createHologramDto);

    return this.hologramsRepository.save(hologram);
  }

  async update(id: number, updateHologramDto: UpdateHologramDto) {
    const hologram = await this.hologramsRepository.preload({
      id: +id,
      ...updateHologramDto,
    });

    if (!hologram) {
      throw new NotFoundException(`hologram #${id} not found`);
    }
  }

  async remove(id: number) {
    const hologram = await this.findOne(id);

    return this.hologramsRepository.remove(hologram);
  }
}
