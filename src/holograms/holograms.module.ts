import { Module } from '@nestjs/common';
import { HologramsController } from './holograms.controller';
import { HologramsService } from './holograms.service';

@Module({
  controllers: [HologramsController],
  providers: [HologramsService],
})
export class HologramsModule {}
