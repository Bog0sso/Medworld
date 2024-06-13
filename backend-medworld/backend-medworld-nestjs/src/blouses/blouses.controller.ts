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
import { TwilioService } from 'src/twilio/twilio.service';

@Controller('blouses')
export class BlousesController {
  constructor(
    private readonly blousesService: BlousesService,
    private twilioService: TwilioService,
  ) {}

  @Post()
  create(@Body() createBlouseDto: CreateBlouseDto) {
    this.twilioService.sendSMS(createBlouseDto.telephone);
    console.log('phone number:' + createBlouseDto.telephone);
    return this.blousesService.create(createBlouseDto);
  }

  @Get()
  findAll() {
    return this.blousesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blousesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlouseDto: UpdateBlouseDto) {
    return this.blousesService.update(updateBlouseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blousesService.remove(+id);
  }
}
