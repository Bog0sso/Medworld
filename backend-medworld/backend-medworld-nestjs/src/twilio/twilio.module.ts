import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TwilioService } from './twilio.service';
import { TwilioController } from './twilio.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([]), ConfigModule],
  controllers: [TwilioController],
  providers: [TwilioService],
})
export class TwilioModule {}
