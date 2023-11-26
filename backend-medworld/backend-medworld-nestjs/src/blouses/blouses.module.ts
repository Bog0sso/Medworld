import { Module } from '@nestjs/common';
import { BlousesService } from './blouses.service';
import { BlousesController } from './blouses.controller';
import { Blouse } from './entities/blouse.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Blouse])],
  controllers: [BlousesController],
  providers: [BlousesService],
})
export class BlousesModule {}
