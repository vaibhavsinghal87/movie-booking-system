import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Movie, MovieDocument } from '../../../schemas/movie.schema';

@Injectable()
export class MoviesRepository {
    constructor(
        @InjectModel(Movie.name) private movieModel: Model<MovieDocument>
    ) {}

    async findAll(): Promise<Movie[]> {
        return this.movieModel.find().exec();
      }
}