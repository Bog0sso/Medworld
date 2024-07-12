// auth.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { TwilioService } from './twilio.service';
import { SmsDto } from 'src/bloc-tenues/dto/sms.dto';
import { SmsVerificationDto } from 'src/bloc-tenues/dto/smsVerification.dto';
@Controller('sms')
export class TwilioController {
  constructor(private readonly twilioService: TwilioService) {}

  @Post()
  async sendSMS(@Body() smsDto: SmsDto) {
    await this.twilioService.sendSMS(smsDto.telephone);
    console.log('Phone number of client - controller' + smsDto.telephone);
  }

  @Post('sms-check')
  async verifySMS(@Body() smsVerificationDto: SmsVerificationDto) {
    await this.twilioService.verifySMS(
      smsVerificationDto.phoneNumber,
      smsVerificationDto.verificationCode,
    );
    console.log(
      `Phone number of client - controler - code verification step : ${smsVerificationDto.phoneNumber}`,
    );
  }
}
