import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/Movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.moviesService.deleteOne(id);
  }

  @Patch('/:id')
  path(@Param('id') movieId: number, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }
}
