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
    // findAll(@Query() paginationQuery)
    // const { limit, offset } = paginationQuery;
    return this.hologramService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hologramService.findOne(parseInt(id));
  }

  @Post()
  create(@Body() createHologramDto: CreateHologramDto) {
    return this.hologramService.create(createHologramDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHologramDto: UpdateHologramDto,
  ) {
    return this.hologramService.update(parseInt(id), updateHologramDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hologramService.remove(parseInt(id));
  }
}
