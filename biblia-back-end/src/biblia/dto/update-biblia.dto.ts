import { PartialType } from '@nestjs/mapped-types';
import { CreateBibliaDto } from './create-biblia.dto';

export class UpdateBibliaDto extends PartialType(CreateBibliaDto) {}
