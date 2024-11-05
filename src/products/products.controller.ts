import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getAll(): Promise<Product[]> {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Product> {
    return await this.productsService.findOne(Number(id));
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return await this.productsService.create(createProductDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return await this.productsService.update(Number(id), updateProductDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.productsService.remove(Number(id));
  }
}
