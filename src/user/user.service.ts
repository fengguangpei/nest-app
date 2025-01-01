import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async findOne(user_name: string) {
    return await this.prismaService.user.findFirst({ where: { user_name } });
  }

  async userList() {
    return await this.prismaService.user.findMany();
  }
}
