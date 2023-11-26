// auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { TwilioService } from './twilio.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly twilioService: TwilioService) {}

  @Post('send-verification-code')
  async sendVerificationCode(@Body('telephone') phoneNumber: string) {
    const verificationCode = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a random code
    try {
      await this.twilioService.sendVerificationCode(
        phoneNumber,
        verificationCode,
      );
      return { message: 'Verification code sent successfully' };
    } catch (error) {
      return { error: error.message };
    }
  }
}
