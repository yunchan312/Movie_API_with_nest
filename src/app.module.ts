import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  //데코레이터 -> 클래스에 함수를 넣을 수 있음
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
