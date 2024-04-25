import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HologramsController } from './holograms/holograms.controller';
import { HologramsService } from './holograms/holograms.service';

@Module({
  imports: [],
  controllers: [AppController, HologramsController],
  providers: [AppService, HologramsService],
})
export class AppModule {}
