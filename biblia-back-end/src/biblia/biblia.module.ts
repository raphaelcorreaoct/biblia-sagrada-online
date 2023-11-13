import { Module } from '@nestjs/common';
import { BibliaService } from './biblia.service';
import { BibliaController } from './biblia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biblia } from './entities/biblia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Biblia])],
  controllers: [BibliaController],
  providers: [BibliaService],
})
export class BibliaModule {}
