import { PartialType } from '@nestjs/mapped-types';
import { CreateBlouseDto } from './create-blouse.dto';

export class UpdateBlouseDto extends PartialType(CreateBlouseDto) {}
