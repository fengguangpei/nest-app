import { Controller, Get, Post, Delete } from '@nestjs/common';
import { SkipAuth } from 'src/decorators';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get('list')
  @SkipAuth()
  getCatList() {
    return this.catService.getCats();
  }

  @Post('new')
  @SkipAuth()
  createCat() {
    return this.catService.createCat();
  }

  @Delete('delete')
  @SkipAuth()
  deleteCat() {
    return this.catService.deleteOne();
  }

  @Post('update')
  @SkipAuth()
  updateCat() {
    return this.catService.updateOne();
  }
}
