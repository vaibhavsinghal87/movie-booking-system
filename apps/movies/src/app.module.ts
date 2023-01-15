import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './modules/movies/movies.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.s3bpiu1.mongodb.net/movie-booking-system?retryWrites=true&w=majority', {}),
    MoviesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
