import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { RoutesModule } from './routes/routes.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), PrismaModule, RoutesModule, RoutesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
