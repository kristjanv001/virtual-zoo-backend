import { Injectable } from '@nestjs/common';
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
  ];

  findAll() {
    return this.holograms;
  }

  findOne(id: number) {
    return this.holograms.find((hologram) => hologram.id === id);
  }

  create(createHologramDto: any) {
    this.holograms.push(createHologramDto);
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
}
