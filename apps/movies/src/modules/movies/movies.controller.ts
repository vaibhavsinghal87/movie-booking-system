import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { Res } from '@nestjs/common/decorators';
import { MoviesService } from './movies.service';

@Controller('api/v1/movies')
export class MoviesController {
    constructor(
        private moviesService: MoviesService
    ) { }

    @Get()
    async getAllMoviesList(@Res() response): Promise<any> {
        const movieList = await this.moviesService.findAll();
        return response.status(HttpStatus.OK).json({
            movieList
        });
    }

    @Get('/explore')
    async getFilteredMoviesList(@Res() response, @Query() filter: any): Promise<any> {
        const movieList = await this.moviesService.filterMovies(filter);
        return response.status(HttpStatus.OK).json({
            movieList
        });
    }
}
