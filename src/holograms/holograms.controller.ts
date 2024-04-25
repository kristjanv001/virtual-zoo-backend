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
  create(@Body() body) {
    return this.hologramService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.hologramService.update(parseInt(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hologramService.remove(parseInt(id));
  }
}
