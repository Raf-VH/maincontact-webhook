import { HttpException, Injectable, Logger } from '@nestjs/common';
import {
    AccountApi,
    Accountfile,
    Accountqueryresponse
} from '../../services//SalesSvcCloudV2_accountService';

@Injectable()
export class AccountService {
    constructor() {}

    async getAccountById(id: string): Promise<Accountfile> {
        // const destinations = JSON.parse(process.env.destinations);
        // const destination = destinations.find(
        //     (d) => d.name === process.env.DESTINATION_NAME
        // );

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
