/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'ContactPersoncreaterequest' schema.
 */
export type ContactPersoncreaterequest = {
  /**
   * Format: "uuid".
   */
  id?: string | null;
  /**
   * Max Length: 10.
   */
  displayId?: string | null;
  /**
   * Max Length: 4.
   * Min Length: 1.
   */
  formOfAddress?: string | null;
  /**
   * Max Length: 4.
   * Min Length: 1.
   */
  academicTitle?: string | null;
  /**
   * Max Length: 40.
   */
  givenName?: string | null;
  /**
   * Max Length: 40.
   */
  middleName?: string | null;
  /**
   * Max Length: 40.
   * Min Length: 1.
   */
  familyName: string;
  /**
   * Max Length: 40.
   * Min Length: 1.
   */
  additionalFamilyName?: string | null;
  /**
   * Max Length: 10.
   * Min Length: 1.
   */
  initialsName?: string | null;
  /**
   * Max Length: 40.
   * Min Length: 1.
   */
  nickName?: string | null;
  /**
   * Max Length: 1.
   * Min Length: 1.
   */
  gender?: string | null;
  /**
   * Max Length: 5.
   * Min Length: 2.
   */
  nonVerbalCommunicationLanguage?: string | null;
  /**
   * Format: "date".
   */
  birthDate?: string | null;
  /**
   * Max Length: 14.
   * Min Length: 1.
   */
  lifeCycleStatus?: string | null;
  /**
   * Format: "uuid".
   */
  accountId?: string | null;
  /**
   * Max Length: 10.
   */
  accountDisplayId?: string | null;
  /**
   * Format: "uuid".
   */
  accountAddressInformationId?: string | null;
  /**
   * Max Length: 4.
   * Min Length: 1.
   */
  department?: string | null;
  /**
   * Max Length: 40.
   */
  departmentName?: string | null;
  /**
   * Max Length: 40.
   */
  functionalTitleName?: string | null;
  /**
   * Max Length: 4.
   * Min Length: 1.
   */
  functionalTitle?: string | null;
  /**
   * Max Length: 1.
   * Min Length: 1.
   */
  vipReason?: string | null;
  /**
   * Max Length: 10.
   */
  buildingId?: string | null;
  /**
   * Max Length: 10.
   */
  floorId?: string | null;
  /**
   * Max Length: 10.
   */
  roomId?: string | null;
  /**
   * Max Length: 40.
   * Min Length: 1.
   */
  facsimileFormattedNumber?: string | null;
  /**
   * Max Length: 40.
   * Min Length: 1.
   */
  phoneFormattedNumber?: string | null;
  /**
   * Max Length: 40.
   * Min Length: 1.
   */
  mobileFormattedNumber?: string | null;
  /**
   * Format: "email".
   * Max Length: 255.
   * Min Length: 1.
   */
  eMail?: string | null;
  /**
   * Max Length: 3.
   * Min Length: 1.
   */
  preferredCommunicationMediumType?: string | null;
  /**
   * Max Length: 2.
   * Min Length: 1.
   */
  contactAllowed?: string | null;
  adminData?: {
    /**
     * Format: "date-time".
     */
    createdOn?: string | null;
    /**
     * Format: "uuid".
     */
    createdBy?: string | null;
    createdByName?: string | null;
    /**
     * Format: "date-time".
     */
    updatedOn?: string | null;
    /**
     * Format: "uuid".
     */
    updatedBy?: string | null;
    updatedByName?: string | null;
  } & Record<string, any>;
  isContactPersonFor?: ({
    /**
     * Format: "uuid".
     */
    id?: string | null;
    /**
     * Format: "uuid".
     */
    accountId?: string | null;
    /**
     * Max Length: 10.
     */
    accountDisplayId?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    accountFormattedName?: string | null;
    /**
     * Max Length: 3.
     * Min Length: 2.
     */
    country?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    countryDescription?: string | null;
    isReverseDefault?: boolean | null;
    /**
     * Max Length: 4.
     * Min Length: 1.
     */
    functionalTitle?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    functionalTitleDescription?: string | null;
    /**
     * Max Length: 4.
     * Min Length: 1.
     */
    department?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    departmentDescription?: string | null;
    /**
     * Max Length: 1.
     * Min Length: 1.
     */
    vipReason?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    vipReasonDescription?: string | null;
    /**
     * Max Length: 40.
     */
    departmentName?: string | null;
    /**
     * Max Length: 40.
     */
    functionalTitleName?: string | null;
    /**
     * Max Length: 10.
     */
    buildingId?: string | null;
    /**
     * Max Length: 10.
     */
    floorId?: string | null;
    /**
     * Max Length: 10.
     */
    roomId?: string | null;
    /**
     * Max Length: 40.
     * Min Length: 1.
     */
    facsimileFormattedNumber?: string | null;
    /**
     * Max Length: 40.
     * Min Length: 1.
     */
    phoneFormattedNumber?: string | null;
    /**
     * Max Length: 40.
     * Min Length: 1.
     */
    mobileFormattedNumber?: string | null;
    /**
     * Format: "email".
     * Max Length: 255.
     * Min Length: 1.
     */
    eMail?: string | null;
    /**
     * Max Length: 3.
     * Min Length: 1.
     */
    preferredCommunicationMediumType?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    preferredCommunicationMediumTypeDescription?: string | null;
  } & Record<string, any>)[];
  externalIds?: ({
    /**
     * Format: "uuid".
     */
    id?: string | null;
    /**
     * Max Length: 100.
     */
    externalId?: string | null;
    /**
     * Format: "uuid".
     */
    communicationSystemId?: string | null;
    communicationSystemDisplayId?: string | null;
    /**
     * Max Length: 15.
     */
    type?: string | null;
    isDefault?: boolean | null;
  } & Record<string, any>)[];
} & Record<string, any>;
