import { Injectable, NotFoundException } from '@nestjs/common';
import { Hologram } from './entities/hologram.entity';

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
      extinctSince: '4000 years ago',
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

  create(createHologramDto: any) {
    const newHologram: Hologram = {
      id: this.genId(),
      ...createHologramDto,
    };

    this.holograms.push(newHologram);

    return newHologram;
  }

  update(id: number, updateHologramDto: any) {
    console.log(updateHologramDto);
    const existingHologram = this.findOne(id);

    if (existingHologram) {
      // update
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
