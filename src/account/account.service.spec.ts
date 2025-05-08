import { Test, TestingModule } from '@nestjs/testing';
import { AccountService } from './account.service';
import { AccountApi } from '../../services/SalesSvcCloudV2_accountService';
import { HttpException } from '@nestjs/common';

jest.mock('../../services/SalesSvcCloudV2_accountService', () => ({
    AccountApi: {
        readaccountserviceAccount: jest.fn()
    }
}));

describe('AccountService', () => {
    let service: AccountService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AccountService]
        }).compile();

        service = module.get<AccountService>(AccountService);
    });

    describe('getAccountById', () => {
        it('should successfully retrieve account', async () => {
            // Arrange
            const accountId = 'test-789';
            const mockAccount = {
                id: accountId,
                name: 'Test Account'
            };

            (AccountApi.readaccountserviceAccount as jest.Mock).mockImplementation(() => ({
                execute: jest.fn().mockResolvedValue(mockAccount)
            }));

            // Act
            const result = await service.getAccountById(accountId);

            // Assert
            expect(result).toEqual(mockAccount);
            expect(AccountApi.readaccountserviceAccount).toHaveBeenCalledWith(accountId);
        });

        it('should handle API errors appropriately', async () => {
            // Arrange
            const accountId = 'invalid-id';

            (AccountApi.readaccountserviceAccount as jest.Mock).mockImplementation(() => ({
                execute: jest.fn().mockRejectedValue(new Error('API Error'))
            }));

            // Act & Assert
            await expect(service.getAccountById(accountId)).rejects.toThrow(
                new HttpException('Failed to retrieve complete account - API Error', 500)
            );
        });
    });
});
