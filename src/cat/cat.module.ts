import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatController } from './cat.controller';
import { Cat, CatSchema } from 'mongoose/cat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [CatService],
  controllers: [CatController],
})
export class CatModule {}
