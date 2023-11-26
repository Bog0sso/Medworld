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
  /*
        //   process.env.TWILIO_ACCOUNT_SID,

      //   process.env.TWILIO_AUTH_TOKEN,    #dynamic - keep this

 const accountSid = 'AC6d64be76fcffd219871f2d150be4fa70';
  const authToken = '7af3eba4385aae3f89644a5976a13e19';
  const verifySid = 'VA9d5658c941041f81320b4c13c5b7af6f';
 */

  async sendVerificationCode(phoneNumber: string, verificationCode: string) {
    try {
      const message = await this.twilioClient.messages.create({
        body: `Your verification code is: ${verificationCode}`,
        from: '+221775160095',
        to: phoneNumber,
      });
      return message;
    } catch (error) {
      throw new Error(`Twilio error: ${error.message}`);
    }
  }
}
