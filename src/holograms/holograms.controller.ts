import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { HologramsService } from './holograms.service';
import { CreateHologramDto } from './dto/create-hologram.dto';
import { UpdateHologramDto } from './dto/update-hologram.dto';

@Controller('holograms')
export class HologramsController {
  constructor(private readonly hologramService: HologramsService) {}

  @Get()
  findAll() {
    return this.hologramService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.hologramService.findOne(id);
  }

  @Post()
  create(@Body() createHologramDto: CreateHologramDto) {
    return this.hologramService.create(createHologramDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateHologramDto: UpdateHologramDto,
  ) {
    return this.hologramService.update(id, updateHologramDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.hologramService.remove(id);
  }
}
