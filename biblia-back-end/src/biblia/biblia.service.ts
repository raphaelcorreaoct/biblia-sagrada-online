import { Injectable } from '@nestjs/common';
import { CreateBibliaDto } from './dto/create-biblia.dto';
import { UpdateBibliaDto } from './dto/update-biblia.dto';

@Injectable()
export class BibliaService {
  create(createBibliaDto: CreateBibliaDto) {
    return 'This action adds a new biblia';
  }

  findAll() {
    return `This action returns all biblia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biblia`;
  }

  update(id: number, updateBibliaDto: UpdateBibliaDto) {
    return `This action updates a #${id} biblia`;
  }

  remove(id: number) {
    return `This action removes a #${id} biblia`;
  }
}
