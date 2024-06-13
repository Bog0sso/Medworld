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
      const message = await this.twilioClient.messages.create({
        from: '+15752134999',
        to: phoneNumber,
        body: '12345',
      });
      return message;
    } catch (error) {
      throw new Error(`Twilio error: ${error.message}`);
    }
  }
}
