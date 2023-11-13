import { Module } from '@nestjs/common';
import { BibliaService } from './biblia.service';
import { BibliaController } from './biblia.controller';

@Module({
  controllers: [BibliaController],
  providers: [BibliaService],
})
export class BibliaModule {}
