import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('')
  create(@Body() createProductDTO: CreateProductDTO) {
    return this.productService.create(createProductDTO);
  }

  @Get('')
  getProductsOrderByName() {
    return this.productService.findAllOrderByName();
  }

  @Get(':id')
  getOneProductByID(@Param('id', ParseUUIDPipe) idProduct: string) {
    return this.productService.findOneByID(idProduct);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) idProduct: string,
    @Body() updateProduct: UpdateProductDTO,
  ) {
    return this.productService.update(idProduct, updateProduct);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) idProduct: string) {
    return this.productService.remove(idProduct);
  }
}
