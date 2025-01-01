import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { SkipAuth } from 'src/decorators';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('list')
  @SkipAuth()
  getUserList() {
    return this.userService.userList();
  }
}
