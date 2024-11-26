import { IsString, IsInt, IsPositive, IsOptional, IsUrl, MinLength, MaxLength } from 'class-validator';

export class CreateTravelDto {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  country: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  city: string;

  @IsString()
  @MinLength(30)
  description: string;

  @IsInt()
  @IsPositive()
  price: number;

  @IsInt()
  @IsOptional()
  @IsPositive()
  discount: number = 0;

  @IsUrl()
  imageURL: string;
}
