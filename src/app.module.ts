import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards';
import { PrismaModule } from './prisma/prisma.module';
// import { MongooseModule } from '@nestjs/mongoose';
// import { CatModule } from './cat/cat.module';
@Module({
  imports: [
    AuthModule,
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    PrismaModule,
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
    //   bufferCommands: true,
    //   autoIndex: false,
    //   dbName: 'app',
    //   maxPoolSize: 200,
    // }),
    // CatModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: AuthGuard }],
})
export class AppModule {}
