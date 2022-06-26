import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './domain/auth/auth.module';
import { JwtStrategy } from './domain/auth/jwt.strategy';
import { ComputadoraModule } from './domain/computadora/computadora.module';
import { UserModule } from './domain/user/user.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'root',
    database: 'soport',
    entities: [__dirname + './**/**/*entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
    logger: 'file',
  }), 
  ComputadoraModule, 
  AuthModule, 
  UserModule],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
