// auth.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { TwilioService } from './twilio.service';
import { SmsDto } from 'src/bloc-tenues/dto/sms.dto';

@Controller('sms')
export class TwilioController {
  constructor(private readonly twilioService: TwilioService) {}

  @Post()
  async sendSMS(@Body() smsDto: SmsDto) {
    await this.twilioService.sendSMS(smsDto.telephone);
    console.log('Phone number in controller' + smsDto.telephone);
  }
}
