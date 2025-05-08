import { Test, TestingModule } from '@nestjs/testing';
import { AccountController } from './account.controller';
import { ContactService } from '../contact/contact.service';
import { HttpException } from '@nestjs/common';
import { ContactPersonApi } from '../../services/SalesSvcCloudV2_contactPersonService';

describe('AccountController', () => {
    let controller: AccountController;
    let contactService: ContactService;

    beforeEach(async () => {
        // Create mock for ContactService
        const contactServiceMock = {
            UpdateCurrentMainContact: jest.fn(),
            UpdateBeforeMainContact: jest.fn()
        };

        const module: TestingModule = await Test.createTestingModule({
            controllers: [AccountController],
            providers: [
                {
                    provide: ContactService,
                    useValue: contactServiceMock
                }
            ]
        }).compile();

        controller = module.get<AccountController>(AccountController);
        contactService = module.get<ContactService>(ContactService);
    });

    describe('receiveWebhookData', () => {
        it('should successfully process webhook data with both contact IDs', async () => {
            // Arrange
            const webhookPayload = {
                data: {
                    currentImage: {
                        primaryContactId: 'current-123'
                    },
                    beforeImage: {
                        primaryContactId: 'before-456'
                    }
                }
            };

            jest.spyOn(
                contactService,
                'UpdateCurrentMainContact'
            ).mockResolvedValue({} as any);
            jest.spyOn(
                contactService,
                'UpdateBeforeMainContact'
            ).mockResolvedValue({} as any);

            // Act
            const result = await controller.receiveWebhookData(webhookPayload);

            // Assert
            expect(result).toEqual({ status: 'success' });
            expect(
                contactService.UpdateCurrentMainContact
            ).toHaveBeenCalledWith('current-123');
            expect(contactService.UpdateBeforeMainContact).toHaveBeenCalledWith(
                'before-456'
            );
        });

        it('should handle missing contact IDs by passing empty strings', async () => {
            // Arrange
            const webhookPayload = {
                data: {
                    currentImage: {},
                    beforeImage: {}
                }
            };

            jest.spyOn(
                contactService,
                'UpdateCurrentMainContact'
            ).mockResolvedValue({} as any);
            jest.spyOn(
                contactService,
                'UpdateBeforeMainContact'
            ).mockResolvedValue({} as any);

            // Act
            const result = await controller.receiveWebhookData(webhookPayload);

            // Assert
            expect(result).toEqual({ status: 'success' });
            expect(
                contactService.UpdateCurrentMainContact
            ).toHaveBeenCalledWith('');
            expect(contactService.UpdateBeforeMainContact).toHaveBeenCalledWith(
                ''
            );
        });

        it('should handle service errors appropriately', async () => {
            // Arrange
            const webhookPayload = {
                data: {
                    currentImage: {
                        primaryContactId: 'current-123'
                    }
                }
            };

            const errorMessage = 'Update failed';
            jest.spyOn(
                contactService,
                'UpdateCurrentMainContact'
            ).mockRejectedValue(new Error(errorMessage));

            // Act & Assert
            await expect(
                controller.receiveWebhookData(webhookPayload)
            ).rejects.toThrow(new HttpException(errorMessage, 500));
        });
    });
});
