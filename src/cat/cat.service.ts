import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';

import { CatModel, CatModelType } from './cat.schema';
import { Connection } from 'mongoose';

@Injectable()
export class CatService {
  @InjectModel(CatModel.modelName)
  private readonly catModel: CatModelType;

  @InjectConnection()
  private readonly connection: Connection;

  async createCat() {
    try {
      const createdCat = new this.catModel({
        name: {},
        age: 8,
        breed: '123',
      });
      return await createdCat.save();
    } catch (error) {
      console.log(error.toString());
    }
  }

  async getCats() {
    const item = await this.catModel.find({}, 'name age');
    return item;
  }

  async updateOne() {
    return await this.catModel.findOneAndUpdate({ age: 1 }, { name: 'name' });
  }

  async deleteOne() {
    return await this.catModel.deleteOne({ age: 1 });
  }
}
