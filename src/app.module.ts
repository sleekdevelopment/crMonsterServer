import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/test')],
  controllers: [AppController],
  components: [],
})
export class AppModule {}
