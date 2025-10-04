import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateProductDTO } from '../dto/create-product.dto';
import { UpdateProductDTO } from '../dto/update-product.dto';

@Injectable()
export class ProductRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createProductDTO: CreateProductDTO) {
    return this.prismaService.product.create({
      data: {
        name: createProductDTO.name,
        price: createProductDTO.price,
        sku: createProductDTO.sku,
      },
    });
  }

  findAllOrderByName() {
    return this.prismaService.product.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  findOneByID(idProduct: string) {
    return this.prismaService.product.findUnique({
      where: {
        id: idProduct,
      },
    });
  }

  update(idProduct: string, updateProductDTO: UpdateProductDTO) {
    return this.prismaService.product.update({
      where: {
        id: idProduct,
      },
      data: {
        ...updateProductDTO,
        updatedAt: new Date(),
      },
    });
  }

  remove(idProduct: string) {
    return this.prismaService.product.delete({
      where: {
        id: idProduct,
      },
    });
  }
}
