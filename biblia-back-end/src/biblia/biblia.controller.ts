import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BibliaService } from './biblia.service';
import { CreateBibliaDto } from './dto/create-biblia.dto';
import { UpdateBibliaDto } from './dto/update-biblia.dto';

@Controller('biblia')
export class BibliaController {
  constructor(private readonly bibliaService: BibliaService) {}

  @Post()
  create(@Body() createBibliaDto: CreateBibliaDto) {
    return this.bibliaService.create(createBibliaDto);
  }

  @Get()
  findAll() {
    return this.bibliaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bibliaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBibliaDto: UpdateBibliaDto) {
    return this.bibliaService.update(+id, updateBibliaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bibliaService.remove(+id);
  }
}
