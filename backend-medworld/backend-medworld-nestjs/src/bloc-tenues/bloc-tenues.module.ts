import { Module } from '@nestjs/common';
import { BlocTenuesService } from './bloc-tenues.service';
import { BlocTenuesController } from './bloc-tenues.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlocTenue } from './entities/bloc-tenue.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlocTenue])],
  controllers: [BlocTenuesController],
  providers: [BlocTenuesService],
})
export class BlocTenuesModule {}
