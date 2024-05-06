import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HologramsController } from './holograms.controller';
import { HologramsService } from './holograms.service';
import { Hologram } from './entities/hologram.entity';
import { Tag } from './entities/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hologram, Tag])],
  controllers: [HologramsController],
  providers: [HologramsService],
})
export class HologramsModule {}
