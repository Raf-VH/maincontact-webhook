import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DestinationService } from './destination/destination.service';
<<<<<<< HEAD
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [AppController],
    providers: [AppService, DestinationService]
=======
import { AccountController } from './account/account.controller';
import { AccountService } from './account/account.service';
import { ContactService } from './contact/contact.service';

@Module({
    imports: [],
    controllers: [AppController, AccountController],
    providers: [AppService, DestinationService, AccountService, ContactService]
>>>>>>> 867e8a0 (Add services/controllers)
})
export class AppModule {}
