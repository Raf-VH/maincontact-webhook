import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AccountController } from './account/account.controller';
import { ContactService } from './contact/contact.service';
import { AccountService } from './account/account.service';

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [AppController, AccountController],
    providers: [AppService, AccountService, ContactService]
})
export class AppModule {}
