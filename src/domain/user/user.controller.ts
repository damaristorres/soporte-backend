import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { User } from './user.entity';
import { ApiTags } from '@nestjs/swagger';
import { GenericController } from 'src/shared/Abstract/genericController';
import { ChangeUserPasswordDto } from './change-user-pass.dto';

@ApiTags('User')
@Controller('user')
export class UserController extends GenericController<User, UserDto>{

    constructor(readonly service: UserService){
        super(service);
    }

    @Post("changePassword")
    async changePass(@Body() dto: ChangeUserPasswordDto) {
          const data = await this.service.changePassword(dto);
      return data;
    }
}
