import { IsNotEmpty, IsString, IsNumber, IsPositive } from 'class-validator';

export class UpdateProductDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;

  @IsNotEmpty()
  @IsString()
  sku: string;
}
