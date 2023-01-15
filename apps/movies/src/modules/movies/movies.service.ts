import { Injectable } from '@nestjs/common';

import { Movie } from '../../schemas/movie.schema';
import { MoviesRepository } from './repositories/movies.repository';

@Injectable()
export class MoviesService {
  constructor(
    private readonly moviesRepository: MoviesRepository
  ) { }

  async findAll(): Promise<Movie[]> {
    return this.moviesRepository.findAll();
  }
}

