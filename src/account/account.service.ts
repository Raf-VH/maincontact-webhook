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

    async getAccounts(): Promise<Accountqueryresponse> {
        try {
            const destination = this.destinationService.getDestination();

            return await AccountApi.queryaccountserviceAccount()
                .execute({
                    destinationName: destination.name
                })
                .catch((error) => {
                    Logger.error(
                        `SAP Error: ${JSON.stringify(error.response?.data || error.message)}`
                    );
                    throw new HttpException(
                        `Failed to get accounts - ${error.message}`,
                        500
                    );
                });
        } catch (error) {
            if (error instanceof HttpException) {
                throw error;
            }
            throw new HttpException(
                `Failed to get accounts - ${error.message}`,
                500
            );
        }
    }

    async getAccountById(id: string): Promise<Accountfile> {
        try {
            const destination = this.destinationService.getDestination();

            return await AccountApi.readaccountserviceAccount(id)
                .execute({
                    destinationName: destination.name
                })
                .catch((error) => {
                    Logger.error(
                        `SAP Error: ${JSON.stringify(error.response?.data || error.message)}`
                    );
                    throw new HttpException(
                        `Failed to get account by ID - ${error.message}`,
                        500
                    );
                });
        } catch (error) {
            if (error instanceof HttpException) {
                throw error;
            }
            throw new HttpException(
                `Failed to get account by ID - ${error.message}`,
                500
            );
        }
    }
}
