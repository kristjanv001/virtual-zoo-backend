import { IsString, IsNumber, Length, Min, Max } from 'class-validator';

export class CreateHologramDto {
  @IsString()
  @Length(2, 100)
  readonly name: string;

  @IsNumber()
  @Min(0)
  @Max(200000000)
  readonly weight: number;

  @IsString()
  @Length(2, 500)
  readonly superPower: string;

  @IsString()
  @Length(2, 500)
  readonly extinctSince?: string;
}
