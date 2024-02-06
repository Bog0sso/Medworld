// twilio.service.ts
import { Injectable } from '@nestjs/common';
import * as Twilio from 'twilio';

@Injectable()
export class TwilioService {
  private readonly twilioClient: Twilio.Twilio;

  constructor() {
    this.twilioClient = Twilio(
      'AC6d64be76fcffd219871f2d150be4fa70',
      '7af3eba4385aae3f89644a5976a13e19',
    );
  }

  async sendSMS(phoneNumber: string) {
    try {
      const message = await this.twilioClient.messages.create({
        from: '+221775160095',
        to: phoneNumber,
        body: 'hey',
      });
      return message;
    } catch (error) {
      throw new Error(`Twilio error: ${error.message}`);
    }
  }
}
