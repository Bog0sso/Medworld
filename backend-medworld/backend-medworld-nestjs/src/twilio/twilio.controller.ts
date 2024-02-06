// auth.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { TwilioService } from './twilio.service';
import { SmsDto } from 'src/bloc-tenues/dto/sms.dto';

@Controller('sms')
export class TwilioController {
  constructor(private readonly twilioService: TwilioService) {}

  @Post()
  async sendSMS(@Body() smsDto: SmsDto) {
    // const verificationCode = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a random code
    try {
      const response = await this.twilioService.sendSMS(smsDto.telephone);
      console.log('This is the phone number:' + response.body);
      return `SMS sent successfully. SID: ${smsDto.telephone}`;
    } catch (error) {
      return `Failed to send SMS: ${error.message}`;
    }
  }
}
