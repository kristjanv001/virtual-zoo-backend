import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HologramsModule } from './holograms/holograms.module';

@Module({
  imports: [HologramsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
