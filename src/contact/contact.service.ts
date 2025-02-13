import { HttpException, Injectable, Logger } from '@nestjs/common';
import { AccountApi } from 'services/SalesSvcCloudV2_accountService';
import {
    ContactPersonApi,
    ContactPersonfile,
    ContactPersonqueryresponse
} from 'services/SalesSvcCloudV2_contactPersonService';
import { DestinationService } from 'src/destination/destination.service';

@Injectable()
export class ContactService {
    constructor(private readonly destinationService: DestinationService) {}

    async GetMainContactAccountId(
        accountId: string
    ): Promise<ContactPersonfile> {
        try {
            const destination = this.destinationService.getDestination();

            const account = await AccountApi.readaccountserviceAccount(
                accountId
            )
                .execute({ destinationName: destination.name })
                .catch((error) => {
                    Logger.error(
                        `SAP Error: ${JSON.stringify(error.response?.data || error.message)}`
                    );
                    throw new HttpException(
                        `Failed to get account by ID - ${error.message}`,
                        500
                    );
                });

            // if (!account.value?.primaryContactId) {
            //     throw new HttpException('Account has no primary contact', 404);
            // }

            console.log(account);

            return await ContactPersonApi.readcontactpersonserviceContactperson(
                account.primaryContactId
            )
                .execute({ destinationName: destination.name })
                .catch((error) => {
                    Logger.error(
                        `SAP Error: ${JSON.stringify(error.response?.data || error.message)}`
                    );
                    throw new HttpException(
                        `Failed to get maincontact by PrimaryContactID - ${error.message}`,
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
