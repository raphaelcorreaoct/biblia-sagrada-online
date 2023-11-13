import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BibliaModule } from './biblia/biblia.module';

@Module({
  imports: [BibliaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
