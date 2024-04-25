import { PartialType } from '@nestjs/mapped-types';
import { CreateHologramDto } from './create-hologram.dto';

export class UpdateHologramDto extends PartialType(CreateHologramDto) {}
