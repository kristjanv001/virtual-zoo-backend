import { Injectable, NotFoundException } from '@nestjs/common';
import { Hologram } from './entities/hologram.entity';
import { UpdateHologramDto } from './dto/update-hologram.dto';
import { CreateHologramDto } from './dto/create-hologram.dto';

@Injectable()
export class HologramsService {
  private holograms: Hologram[] = [
    {
      id: 1,
      name: 'T-Rex',
      weight: 8000,
      superPower: 'Powerful jaws and sharp teeth',
      extinctSince: '66 million years ago',
    },
    {
      id: 2,
      name: 'Mammoth',
      weight: 6000,
      superPower: 'Thick fur for cold climates',
      // extinctSince: '4000 years ago',
    },
    {
      id: 3,
      name: 'Dodo',
      weight: 10,
      superPower: 'Flightless bird',
      extinctSince: 'Late 17th century',
    },
    {
      id: 4,
      name: 'Sabre-toothed Cat',
      weight: 400,
      superPower: 'Massive curved teeth for hunting',
      extinctSince: 'Towards the end of the Pleistocene epoch',
    },
  ];

  findAll() {
    return this.holograms;
  }

  findOne(id: number) {
    const hologram = this.holograms.find((hologram) => hologram.id === id);

    if (!hologram) {
      throw new NotFoundException(`hologram #${id} not found`);
    }
    return hologram;
  }

  create(createHologramDto: CreateHologramDto) {
    const newHologram: Hologram = {
      id: this.genId(),
      ...createHologramDto,
    };

    this.holograms.push(newHologram);

    return newHologram;
  }

  update(id: number, updateHologramDto: UpdateHologramDto) {
    const index = this.holograms.findIndex((h) => h.id === id);

    if (index >= 0) {
      const updatedHologram = { id, ...updateHologramDto } as Hologram;
      this.holograms[index] = updatedHologram;

      return updatedHologram;
    }
  }

  remove(id: number) {
    const hologramIndex = this.holograms.findIndex(
      (hologram) => hologram.id === id,
    );

    if (hologramIndex >= 0) {
      this.holograms.splice(hologramIndex, 1);
    }
  }

  private genId(): number {
    const lastId =
      this.holograms.length > 0
        ? this.holograms[this.holograms.length - 1].id
        : 1;

    return lastId + 1;
  }
}
