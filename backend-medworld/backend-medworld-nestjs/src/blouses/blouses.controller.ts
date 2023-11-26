import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlousesService } from './blouses.service';
import { CreateBlouseDto } from './dto/create-blouse.dto';
import { UpdateBlouseDto } from './dto/update-blouse.dto';

@Controller('blouses')
export class BlousesController {
  constructor(private readonly blousesService: BlousesService) {}

  @Post()
  create(@Body() createBlouseDto: CreateBlouseDto) {
    return this.blousesService.create(createBlouseDto);
  }

  @Get()
  findAll() {
    return this.blousesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blousesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlouseDto: UpdateBlouseDto) {
    return this.blousesService.update(+id, updateBlouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blousesService.remove(+id);
  }
}
