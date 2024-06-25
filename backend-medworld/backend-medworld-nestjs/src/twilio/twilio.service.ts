// twilio.service.ts
import { Injectable } from '@nestjs/common';
import * as Twilio from 'twilio';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class TwilioService {
  private readonly twilioClient: Twilio.Twilio;

  constructor(private configService: ConfigService) {
    const TWILIO_ACCOUNT_SID =
      this.configService.get<string>('TWILIO_ACCOUNT_SID');
    const TWILIO_AUTH_TOKEN =
      this.configService.get<string>('TWILIO_AUTH_TOKEN');
    this.twilioClient = Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
  }

  async sendSMS(phoneNumber: string) {
    try {
      const verification = await this.twilioClient.verify.v2
        .services(this.configService.get<string>('TWILIO_SERVICE_SID'))
        .verifications.create({
          channel: 'sms',
          to: phoneNumber,
        });

      console.log('Verification SID:', verification.sid);
    } catch (error) {
      console.error('Twilio Error:', error);
      if (error.response) {
        console.error('Error Details:', error.response.body);
      }
    }
  }
}
