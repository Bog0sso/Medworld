import { Injectable } from '@nestjs/common';
import { CreateBlouseDto } from './dto/create-blouse.dto';
import { UpdateBlouseDto } from './dto/update-blouse.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blouse } from './entities/blouse.entity';

@Injectable()
export class BlousesService {
  constructor(
    @InjectRepository(Blouse)
    private blousesRepository: Repository<Blouse>,
  ) {}
  //
  create(createBlouseDto: CreateBlouseDto) {
    // return 'This action adds a new blouse';
    return this.blousesRepository.save(createBlouseDto);
  }

  findAll() {
    // return `This action returns all blouses`;
    return this.blousesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} blouse`;
  }

  update(id: number, updateBlouseDto: UpdateBlouseDto) {
    return `This action updates a #${id} blouse`;
  }

  remove(id: number) {
    return `This action removes a #${id} blouse`;
  }
}
