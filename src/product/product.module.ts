import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { ProductRepository } from './repository/product.repository';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService, ProductRepository],
})
export class ProductModule {}
