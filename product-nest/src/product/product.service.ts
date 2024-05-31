import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
//import { UpdateProductDto } from './dto/update-Product.dto';
import { Product } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private ProductModel: Model<Product>) {}

  create(createProductDto: CreateProductDto) {
    const createdProduct = this.ProductModel.create(createProductDto);
    return createdProduct;
  }

  findAll() {
    return this.ProductModel.find();
  }

  findById(id: string) {
    return this.ProductModel.findById(id);
  }

  // update(id: string, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} Product`;
  // }

  remove(id: string) {
    return this.ProductModel.findByIdAndDelete(id);
  }
}
