import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BibliaModule } from './biblia/biblia.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { VersesModule } from './verses/verses.module';

@Module({
  imports: [
    BibliaModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: __dirname + '/database/db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/{.ts,.js}'],
      synchronize: true,
    }),
    BooksModule,
    VersesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
