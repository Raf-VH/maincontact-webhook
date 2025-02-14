import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post
} from '@nestjs/common';
import { AccountService } from './account.service';
import {
    Accountfile,
    Accountqueryresponse
} from 'services/SalesSvcCloudV2_accountService';
import { ContactPersonfile } from 'services/SalesSvcCloudV2_contactPersonService';
import { ContactService } from 'src/contact/contact.service';

@Controller('/account')
export class AccountController {
    constructor(
        private readonly accountservice: AccountService,
        private readonly contactservice: ContactService
    ) {}

    @Post()
    async receiveWebhookData(
        @Body() webhookPayload: any
    ): Promise<Accountfile> {
        try {
            // Get CurrentImage of PrimaryContactId
            console.log('Incoming Contact ID:');
            console.log(webhookPayload.data?.currentImage?.primaryContactId);

            const currentContact =
                await this.contactservice.UpdateCurrentMainContact(
                    webhookPayload.data?.currentImage?.primaryContactId
                );

            // Get BeforeImage of PrimaryContactId
            console.log('Incoming Contact ID:');
            console.log(webhookPayload.data?.beforeImage?.primaryContactId);

            const beforeContact =
                await this.contactservice.UpdateBeforeMainContact(
                    webhookPayload.data?.beforeImage?.primaryContactId
                );

            return { status: 'succes' };
        } catch (error) {
            console.error(error);
            throw new HttpException(
                error.message,
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }

    // Testing purposes
    @Get('/all')
    getAccounts(): Promise<Accountqueryresponse> {
        return this.accountservice.getAccounts();
    }

    @Get('/:accountId/maincontact')
    getMainContact(
        @Param('accountId') accountId: string
    ): Promise<ContactPersonfile> {
        return this.contactservice.GetMainContactByAccountId(accountId);
    }
}
