import { HttpException, Injectable, Logger } from '@nestjs/common';
import {
    AccountApi,
    Accountfile,
    Accountqueryresponse
} from '../../services/SalesSvcCloudV2_accountService';
import { DestinationService } from 'src/destination/destination.service';

@Injectable()
export class AccountService {
    constructor(private readonly destinationService: DestinationService) {}

    async getAccountById(id: string): Promise<Accountfile> {
        // const destination = this.destinationService.getDestination();

        //Read complete Account from AccountAPI
        return await AccountApi.readaccountserviceAccount(id)
            .execute({
                destinationName: process.env.DESTINATION_NAME!
            })
            .catch((error) => {
                throw new HttpException(
                    `Failed to retrieve complete account - ${error.message}`,
                    500
                );
            });
    }
}
