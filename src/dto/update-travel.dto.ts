import { IsString, IsInt, IsPositive, IsOptional, IsUrl, MinLength, MaxLength } from 'class-validator';

export class UpdateTravelDto {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  @IsOptional()
  country?: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  @IsOptional()
  city?: string;

  @IsString()
  @MinLength(30)
  @IsOptional()
  description?: string;

  @IsInt()
  @IsPositive()
  @IsOptional()
  price?: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  discount?: number;

  @IsUrl()
  imageURL: string;
}
