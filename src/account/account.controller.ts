import { Controller, Get, Param, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import {
    Accountfile,
    Accountqueryresponse
} from 'services/SalesSvcCloudV2_accountService';
import { ContactPersonfile } from 'services/SalesSvcCloudV2_contactPersonService';
import { ContactService } from 'src/contact/contact.service';

@Controller('accounts')
export class AccountController {
    constructor(
        private readonly accountservice: AccountService,
        private readonly contactservice: ContactService
    ) {}

    @Get()
    getAccounts(): Promise<Accountqueryresponse> {
        return this.accountservice.getAccounts();
    }

    @Get(':Id')
    getAccount(@Param('Id') accountId: string): Promise<Accountfile> {
        return this.accountservice.getAccountById(accountId);
    }

    @Get('/:accountId/maincontact')
    getMainContact(
        @Param('accountId') accountId: string
    ): Promise<ContactPersonfile> {
        return this.contactservice.GetMainContactByAccountId(accountId);
    }

    @Post()
    postAccount() {}
}
