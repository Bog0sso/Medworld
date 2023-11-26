import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlocTenuesService } from './bloc-tenues.service';
import { CreateBlocTenueDto } from './dto/create-bloc-tenue.dto';
import { UpdateBlocTenueDto } from './dto/update-bloc-tenue.dto';

@Controller('bloc-tenues')
export class BlocTenuesController {
  constructor(private readonly blocTenuesService: BlocTenuesService) {}

  @Post()
  create(@Body() createBlocTenueDto: CreateBlocTenueDto) {
    return this.blocTenuesService.create(createBlocTenueDto);
  }

  @Get()
  findAll() {
    return this.blocTenuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blocTenuesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBlocTenueDto: UpdateBlocTenueDto,
  ) {
    return this.blocTenuesService.update(+id, updateBlocTenueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blocTenuesService.remove(+id);
  }
}
