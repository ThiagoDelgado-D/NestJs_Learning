import {
  IsString,
  MinLength,
  IsInt,
  IsPositive,
  IsOptional,
} from 'class-validator';

export class CreateCatDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsInt()
  @IsPositive()
  age: number;

  @IsString()
  @IsOptional()
  breed?: string;
}
