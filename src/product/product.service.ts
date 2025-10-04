import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductRepository } from './repository/product.repository';
import { UpdateProductDTO } from './dto/update-product.dto';
import { firstLetterOut } from 'src/utils/func-first-letter-out';
import { ProductEntity, ProductExtendedEntity } from './entity/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  create(createProductDTO: CreateProductDTO): Promise<ProductEntity> {
    return this.productRepository.create(createProductDTO);
  }

  async findAllOrderByName(): Promise<ProductExtendedEntity[]> {
    const productList = await this.productRepository.findAllOrderByName();

    const newProductList = productList.map((product) => {
      return {
        ...product,
        firstLetterOut: firstLetterOut(product.name),
      };
    });

    return newProductList;
  }

  async findOneByID(idProduct: string): Promise<ProductExtendedEntity> {
    const product = await this.productRepository.findOneByID(idProduct);

    if (!product) {
      throw new NotFoundException('Product not found for this ID');
    }

    return {
      ...product,
      firstLetterOut: firstLetterOut(product.name),
    };
  }

  update(
    idProduct: string,
    updateProduct: UpdateProductDTO,
  ): Promise<ProductEntity> {
    return this.productRepository.update(idProduct, updateProduct);
  }

  remove(idProduct: string): Promise<ProductEntity> {
    return this.productRepository.remove(idProduct);
  }
}
