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

  //TBD : for single item details pulling
  findOne(id: string): Promise<Blouse | undefined> {
    return this.blousesRepository.findOneBy({ identifiantBlouse: id });
  }

  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // update(id: number, updateBlouseDto: UpdateBlouseDto) {
  //   return this.blousesRepository.findOne(+ id).
  //   // return `This action updates a #${id} blouse`;
  // }
  async update(updateBlouseDto: UpdateBlouseDto): Promise<Blouse | undefined> {
    const blouse = await this.blousesRepository.findOneBy({
      identifiantBlouse: updateBlouseDto.identifiantBlouse,
    });
    // return this.usersRepository.findOne({ username });

    // if (!blouse) {
    //     throw new NotFoundException(`Blouse with ID ${id} not found`);
    // }

    Object.assign(blouse, updateBlouseDto);
    return this.blousesRepository.save(blouse);
  }

  remove(id: number) {
    return `This action removes a #${id} blouse`;
  }
}
