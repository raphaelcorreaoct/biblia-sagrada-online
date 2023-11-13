import { Injectable } from '@nestjs/common';
import { CreateBibliaDto } from './dto/create-biblia.dto';
import { UpdateBibliaDto } from './dto/update-biblia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Biblia } from './entities/biblia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BibliaService {
  constructor(
    @InjectRepository(Biblia) private bibliaRepository: Repository<Biblia>,
  ) {}

  async create(createBibliaDto: CreateBibliaDto) {
    return await this.bibliaRepository.save(createBibliaDto);
  }

  async findAll() {
    return await this.bibliaRepository.find();
  }

  async findOne(id: number) {
    return await this.bibliaRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateBibliaDto: UpdateBibliaDto) {
    await this.bibliaRepository.update(id, updateBibliaDto);
  }

  remove(id: number) {
    return this.bibliaRepository.delete(id);
  }
}
