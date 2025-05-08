import {
    Body,
    Controller,
    HttpException,
    HttpStatus,
    Logger,
    Post
} from '@nestjs/common';
import { AccountService } from './account.service';
import { Accountfile } from '../../services/SalesSvcCloudV2_accountService';
import { ContactService } from '../contact/contact.service';

@Controller('/account')
export class AccountController {
    private readonly logger = new Logger(AccountService.name);

    constructor(private readonly contactservice: ContactService) {}

    @Post()
    async receiveWebhookData(
        @Body() webhookPayload: any
    ): Promise<Accountfile> {
        try {
            const currentContactId =
                webhookPayload.data.currentImage?.primaryContactId ?? '';
            const beforeContactId =
                webhookPayload.data.beforeImage?.primaryContactId ?? '';

            this.logger.debug(
                `Incoming Current Contact ID: ${currentContactId}`
            );
            this.logger.debug(`Incoming Before Contact ID: ${beforeContactId}`);

            await Promise.all([
                await this.contactservice.UpdateCurrentMainContact(
                    currentContactId
                ),
                await this.contactservice.UpdateBeforeMainContact(
                    beforeContactId
                )
            ]);

            return { status: 'success' };
        } catch (error) {
            // console.error(error);
            throw new HttpException(
                error.message,
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        }
    }
}
