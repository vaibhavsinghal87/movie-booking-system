import { Controller, Get, HttpStatus } from '@nestjs/common';
import { Res } from '@nestjs/common/decorators';
import { MoviesService } from './movies.service';

@Controller('api/v1/movies')
export class MoviesController {
    constructor(
        private moviesService: MoviesService
    ) { }

    @Get()
    async getHello(@Res() response): Promise<any> {
        const movieList = await this.moviesService.findAll();
        return response.status(HttpStatus.OK).json({
            movieList
        });
    }
}
