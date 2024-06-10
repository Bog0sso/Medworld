import { DataSource } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlousesModule } from './blouses/blouses.module';
import { BlocTenuesModule } from './bloc-tenues/bloc-tenues.module';
import { BlocTenue } from './bloc-tenues/entities/bloc-tenue.entity';
import { Blouse } from './blouses/entities/blouse.entity';
import { TwilioService } from './twilio/twilio.service';
import { TwilioModule } from './twilio/twilio.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
@Module({
  imports: [
    BlousesModule,
    BlocTenuesModule,
    TwilioModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'medstyle',
      entities: [Blouse, BlocTenue],
      synchronize: true, // set to true only in dev environment
      autoLoadEntities: true,
    }),
    AuthModule,
    UsersModule,
    ConfigModule.forRoot(({
      load: [configuration],
    })),
  ],
  controllers: [AppController],
  providers: [AppService, TwilioService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
