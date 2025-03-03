import { HttpException, Injectable, Logger } from '@nestjs/common';

@Injectable()
export class DestinationService {
    getDestination(): { name: string } {
        if (!process.env.destinations) {
            throw new HttpException(
                'Destination configuration is missing',
                500
            );
        }
        
        try {
            const destinations = JSON.parse(process.env.destinations);
            const destination = destinations.find(
                (d) => d.name === process.env.DESTINATION_NAME
            );

            if (!destination) {
                throw new HttpException(`Destination ${process.env.DESTINATION_NAME} not found`, 500);
            }

            return destination;
        } catch (error) {
            Logger.error(`Failed to parse destinations configuration: ${error.message}`);
            throw new HttpException(
                `Failed to parse destinations configuration - ${error.message}`,
                500
            );
        }
    }
}
