import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

import { Movie, MovieSchema } from './schemas/movie.schema';
import { MoviesRepository } from './repositories/movies.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }])],
  controllers: [MoviesController],
  providers: [MoviesService, MoviesRepository],
})
export class MoviesModule { }
