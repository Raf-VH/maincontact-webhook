import { Test, TestingModule } from '@nestjs/testing';
import { ContactService } from './contact.service';
import { ContactPersonApi } from '../../services/SalesSvcCloudV2_contactPersonService';
import { HttpException } from '@nestjs/common';

jest.mock('../../services/SalesSvcCloudV2_contactPersonService', () => ({
    ContactPersonApi: {
        readcontactpersonserviceContactperson: jest.fn(),
        partialupdatecontactpersonserviceContactperson: jest.fn()
    }
}));

describe('ContactService', () => {
    let service: ContactService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ContactService]
        }).compile();

        service = module.get<ContactService>(ContactService);
    });

    describe('UpdateCurrentMainContact', () => {
        it('should successfully update contact to main contact', async () => {
            // Arrange
            const contactId = 'test-123';
            const mockContact = {
                value: {
                    givenName: 'John',
                    familyName: 'Doe',
                    adminData: {
                        updatedOn: '2024-02-18T12:00:00Z'
                    }
                }
            };

            (ContactPersonApi.readcontactpersonserviceContactperson as jest.Mock).mockImplementation(() => ({
                execute: jest.fn().mockResolvedValue(mockContact)
            }));

            (ContactPersonApi.partialupdatecontactpersonserviceContactperson as jest.Mock).mockImplementation(() => ({
                addCustomHeaders: jest.fn().mockReturnThis(),
                execute: jest.fn().mockResolvedValue({ status: 'success' })
            }));

            // Act
            const result = await service.UpdateCurrentMainContact(contactId);

            // Assert
            expect(result).toEqual({ status: 'success' });
            expect(ContactPersonApi.partialupdatecontactpersonserviceContactperson).toHaveBeenCalledWith(
                contactId,
                {
                    extensions: {
                        MainContact: true
                    }
                },
                {
                    'If-Match': '"2024-02-18T12:00:00Z"'
                }
            );
        });

        it('should throw exception for empty contact ID', async () => {
            // Act & Assert
            await expect(service.UpdateCurrentMainContact('')).rejects.toThrow(
                new HttpException('Account has no primary contact', 404)
            );
        });

        it('should handle API errors appropriately', async () => {
            // Arrange
            const contactId = 'test-123';

            (ContactPersonApi.readcontactpersonserviceContactperson as jest.Mock).mockImplementation(() => ({
                execute: jest.fn().mockRejectedValue(new Error('API Error'))
            }));

            // Act & Assert
            await expect(service.UpdateCurrentMainContact(contactId)).rejects.toThrow(
                new HttpException('Failed to update main contact - API Error', 500)
            );
        });
    });

    describe('UpdateBeforeMainContact', () => {
        it('should successfully update contact to non-main contact', async () => {
            // Arrange
            const contactId = 'test-456';
            const mockContact = {
                value: {
                    givenName: 'Jane',
                    familyName: 'Doe',
                    adminData: {
                        updatedOn: '2024-02-18T12:00:00Z'
                    }
                }
            };

            (ContactPersonApi.readcontactpersonserviceContactperson as jest.Mock).mockImplementation(() => ({
                execute: jest.fn().mockResolvedValue(mockContact)
            }));

            (ContactPersonApi.partialupdatecontactpersonserviceContactperson as jest.Mock).mockImplementation(() => ({
                addCustomHeaders: jest.fn().mockReturnThis(),
                execute: jest.fn().mockResolvedValue({ status: 'success' })
            }));

            // Act
            const result = await service.UpdateBeforeMainContact(contactId);

            // Assert
            expect(result).toEqual({ status: 'success' });
            expect(ContactPersonApi.partialupdatecontactpersonserviceContactperson).toHaveBeenCalledWith(
                contactId,
                {
                    extensions: {
                        MainContact: false
                    }
                },
                {
                    'If-Match': '"2024-02-18T12:00:00Z"'
                }
            );
        });

        it('should throw exception for empty contact ID', async () => {
            // Act & Assert
            await expect(service.UpdateBeforeMainContact('')).rejects.toThrow(
                new HttpException('Account has no primary contact', 404)
            );
        });

        it('should handle API errors appropriately', async () => {
            // Arrange
            const contactId = 'test-456';

            (ContactPersonApi.readcontactpersonserviceContactperson as jest.Mock).mockImplementation(() => ({
                execute: jest.fn().mockRejectedValue(new Error('API Error'))
            }));

            // Act & Assert
            await expect(service.UpdateBeforeMainContact(contactId)).rejects.toThrow(
                new HttpException('Failed to update main contact - API Error', 500)
            );
        });
    });
});
