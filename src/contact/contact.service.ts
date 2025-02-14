import { HttpException, Injectable, Logger } from '@nestjs/common';
import {
    ContactPersonApi,
    ContactPersonfile
} from 'services/SalesSvcCloudV2_contactPersonService';
import { DestinationService } from 'src/destination/destination.service';

@Injectable()
export class ContactService {
    private readonly logger = new Logger(ContactService.name);

    constructor(private readonly destinationService: DestinationService) {}

    private async updateContactMainStatus(
        id: string,
        isMainContact: boolean
    ): Promise<ContactPersonfile> {
        if (id == '') {
            throw new HttpException('Account has no primary contact', 404);
        }

        const destination = this.destinationService.getDestination();

        try {
            // Get contact to get 'updatedOn'
            const contact =
                await ContactPersonApi.readcontactpersonserviceContactperson(
                    id
                ).execute({ destinationName: destination.name });

            const updatedOn = contact.value?.adminData?.updatedOn;

            this.logger.debug(
                `Contact ${contact.value?.givenName} ${contact.value?.familyName} last modified: ${updatedOn}`
            );

            //Update 'MainContact' field
            return await ContactPersonApi.partialupdatecontactpersonserviceContactperson(
                id,
                {
                    extensions: {
                        MainContact: isMainContact
                    }
                },
                {
                    'If-Match': `"${updatedOn!}"`
                }
            )
                .addCustomHeaders({
                    'Content-Type': 'application/merge-patch+json'
                })
                .execute({ destinationName: destination.name });
        } catch (error) {
            throw new HttpException(
                `Failed to update main contact - ${error.message}`,
                500
            );
        }
    }

    async UpdateCurrentMainContact(id: string) {
        return await this.updateContactMainStatus(id, true);
    }

    async UpdateBeforeMainContact(id: string) {
        return await this.updateContactMainStatus(id, false);
    }
}
