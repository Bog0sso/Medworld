import { Injectable } from '@nestjs/common';
import { CreateBlocTenueDto } from './dto/create-bloc-tenue.dto';
import { UpdateBlocTenueDto } from './dto/update-bloc-tenue.dto';
import { BlocTenue } from './entities/bloc-tenue.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BlocTenuesService {
  constructor(
    @InjectRepository(BlocTenue)
    private blocTenuesRepository: Repository<BlocTenue>,
  ) {}

  create(createBlocTenueDto: CreateBlocTenueDto) {
    // return 'This action adds a new blocTenue';
    return this.blocTenuesRepository.save(createBlocTenueDto);
  }

  findAll() {
    // return `This action returns all blocTenues`;
    return this.blocTenuesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} blocTenue`;
  }

  update(id: number, updateBlocTenueDto: UpdateBlocTenueDto) {
    return `This action updates a #${id} blocTenue`;
  }

  remove(id: number) {
    return `This action removes a #${id} blocTenue`;
  }
}
