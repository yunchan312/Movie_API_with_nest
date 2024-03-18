import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  //데코레이터 -> 클래스에 함수를 넣을 수 있음
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
