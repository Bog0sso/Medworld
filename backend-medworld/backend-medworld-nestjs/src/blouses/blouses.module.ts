import { Module } from '@nestjs/common';
import { BlousesService } from './blouses.service';
import { BlousesController } from './blouses.controller';
import { Blouse } from './entities/blouse.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TwilioModule } from 'src/twilio/twilio.module';
import { TwilioService } from 'src/twilio/twilio.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Blouse]), TwilioModule],
  controllers: [BlousesController],
  providers: [BlousesService, TwilioService, ConfigService],
})
export class BlousesModule {}
