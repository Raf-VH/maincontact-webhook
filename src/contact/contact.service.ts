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

    async UpdateCurrentMainContact(Id: string) {
        const destination = this.destinationService.getDestination();

        if (Id == '') {
            throw new HttpException('Account has no primary contact', 404);
        }

        setTimeout(async () => {
            // Get current contact to get AdminData
            const currentContact =
                await ContactPersonApi.readcontactpersonserviceContactperson(
                    Id
                ).execute({ destinationName: destination.name });

            const updatedOn = currentContact.value?.adminData?.updatedOn;

            console.log('Last Modified: ' + updatedOn);
            console.log(currentContact.value?.familyName);

            //Update 'MainContact' field of the currect Contact
            const updatedContact =
                await ContactPersonApi.partialupdatecontactpersonserviceContactperson(
                    Id,
                    {
                        extensions: {
                            MainContact: true
                        }
                    },
                    {
                        'If-Match': '"' + updatedOn! + '"'
                    }
                )
                    .addCustomHeaders({
                        'Content-Type': 'application/merge-patch+json'
                    })
                    .execute({ destinationName: destination.name })
                    .catch((error) => {
                        console.log(error);
                        throw new HttpException(
                            `Failed to update current main contact - ${error.message}`,
                            500
                        );
                    });

            return updatedContact;
        }, 10000);
    }

    async UpdateBeforeMainContact(Id: string) {
        const destination = this.destinationService.getDestination();

        if (Id == '') {
            throw new HttpException('Account has no primary contact', 404);
        }

        // Get current contact to get AdminData
        const beforeContact =
            await ContactPersonApi.readcontactpersonserviceContactperson(
                Id
            ).execute({ destinationName: destination.name });

        const updatedOn = beforeContact.value?.adminData?.updatedOn;

        console.log('Last Modified: ' + updatedOn);
        console.log(beforeContact.value?.familyName);

        //Update 'MainContact' field of the before Contact
        const updatedContact =
            await ContactPersonApi.partialupdatecontactpersonserviceContactperson(
                Id,
                {
                    extensions: {
                        MainContact: false
                    }
                },
                {
                    'If-Match': '"' + updatedOn! + '"'
                }
            )
                .addCustomHeaders({
                    'Content-Type': 'application/merge-patch+json'
                })
                .execute({ destinationName: destination.name })
                .catch((error) => {
                    throw new HttpException(
                        `Failed to update before main contact - ${error.message}`,
                        500
                    );
                });

        return updatedContact;
    }

    //Testing purposes
    async GetMainContactByAccountId(
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

            if (!account.value?.primaryContactId) {
                throw new HttpException('Account has no primary contact', 404);
            }

            console.log(
                'Account PrimaryContactID: ' + account.value.primaryContactId
            );

            return await ContactPersonApi.readcontactpersonserviceContactperson(
                account.value.primaryContactId
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
