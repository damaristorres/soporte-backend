import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JWTPayload } from './jwt.payload';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UserService,
        private jwtService: JwtService
      ) {}
    
      async validateUser(login: string, password: string){
        const user = await this.usuarioService.getUserByLogin(login);
        if(!user){
          return false;
        }
        return await user.validatePassword(password);
      }
    
      async generateAccessToken(login: string) {
        const user = await this.usuarioService.getUserByLogin(login)
        const payload:JWTPayload = { login: user.login };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
