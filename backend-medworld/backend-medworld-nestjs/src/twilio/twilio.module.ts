import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TwilioService } from './twilio.service';
import { TwilioController } from './twilio.controller';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [TwilioController],
  providers: [TwilioService],
})
export class TwilioModule {}
