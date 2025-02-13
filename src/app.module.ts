import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DestinationService } from './destination/destination.service';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService, DestinationService]
})
export class AppModule {}
