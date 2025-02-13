/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */

/**
 * Representation of the 'Accountcreaterequest' schema.
 */
export type Accountcreaterequest = {
  /**
   * Format: "uuid".
   */
  id?: string | null;
  /**
   * Max Length: 10.
   */
  displayId?: string | null;
  /**
   * Max Length: 6.
   * Min Length: 1.
   */
  customerRole: string;
  /**
   * Max Length: 1.
   * Min Length: 1.
   */
  customerABCClassification?: string | null;
  /**
   * Max Length: 2.
   * Min Length: 1.
   */
  nielsenRegion?: string | null;
  /**
   * Max Length: 14.
   * Min Length: 1.
   */
  lifeCycleStatus?: string | null;
  isNaturalPerson?: boolean | null;
  blockingReasons?: {
    /**
     * Max Length: 2.
     * Min Length: 1.
     */
    invoicingBlockingReason?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    invoicingBlockingReasonDescription?: string | null;
    /**
     * Max Length: 2.
     * Min Length: 1.
     */
    deliveryBlockingReason?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    deliveryBlockingReasonDescription?: string | null;
    /**
     * Max Length: 2.
     * Min Length: 1.
     */
    orderBlockingReason?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    orderBlockingReasonDescription?: string | null;
    isSalesSupportBlocked?: boolean | null;
  } & Record<string, any>;
  /**
   * Max Length: 40.
   * Min Length: 1.
   */
  firstLineName: string;
  /**
   * Max Length: 40.
   */
  secondLineName?: string | null;
  /**
   * Max Length: 40.
   */
  thirdLineName?: string | null;
  /**
   * Max Length: 40.
   */
  fourthLineName?: string | null;
  /**
   * Max Length: 10.
   * Min Length: 1.
   */
  industrialSector?: string | null;
  /**
   * Max Length: 2.
   * Min Length: 1.
   */
  companyLegalForm?: string | null;
  /**
   * Max Length: 2.
   * Min Length: 1.
   */
  contactAllowed?: string | null;
  /**
   * Max Length: 60.
   * Min Length: 1.
   */
  dunAndBradstreetId?: string | null;
  /**
   * Format: "uuid".
   */
  ownerId?: string | null;
  defaultAddress?: {
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
    region?: {
      /**
       * Max Length: 3.
       * Min Length: 2.
       */
      country?: string | null;
      /**
       * Max Length: 6.
       * Min Length: 1.
       */
      region?: string | null;
    } & Record<string, any>;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    regionDescription?: string | null;
    /**
     * Max Length: 10.
     */
    postalCode?: string | null;
    /**
     * Max Length: 40.
     */
    cityName?: string | null;
    /**
     * Max Length: 80.
     */
    streetName?: string | null;
    /**
     * Max Length: 10.
     */
    houseId?: string | null;
    /**
     * Max Length: 40.
     */
    countyName?: string | null;
    /**
     * Max Length: 40.
     */
    districtName?: string | null;
    /**
     * Max Length: 40.
     */
    streetPrefixName?: string | null;
    /**
     * Max Length: 40.
     */
    additionalStreetPrefixName?: string | null;
    /**
     * Max Length: 40.
     */
    streetSuffixName?: string | null;
    /**
     * Max Length: 40.
     */
    additionalStreetSuffixName?: string | null;
    /**
     * Max Length: 10.
     * Min Length: 1.
     */
    postOfficeBoxId?: string | null;
    isPostOfficeBoxAddress?: boolean | null;
    latitudeMeasure?: number | null;
    longitudeMeasure?: number | null;
    isInternalGeoLocation?: boolean | null;
    /**
     * Max Length: 5.
     * Min Length: 2.
     */
    correspondenceLanguage?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    correspondenceLanguageDescription?: string | null;
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
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    formattedPostalAddressDescription?: string | null;
    /**
     * Max Length: 40.
     */
    additionalCityName?: string | null;
    /**
     * Max Length: 10.
     */
    additionalHouseId?: string | null;
    /**
     * Max Length: 40.
     */
    careOfName?: string | null;
  } & Record<string, any>;
  defaultCommunication?: {
    /**
     * Format: "email".
     * Max Length: 255.
     * Min Length: 1.
     */
    eMail?: string | null;
    /**
     * Format: "uri".
     * Max Length: 1280.
     * Min Length: 1.
     */
    web?: string | null;
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
    phoneNormalisedNumber?: string | null;
    /**
     * Max Length: 40.
     * Min Length: 1.
     */
    mobileFormattedNumber?: string | null;
    /**
     * Max Length: 40.
     * Min Length: 1.
     */
    mobileNormalisedNumber?: string | null;
  } & Record<string, any>;
  addresses?: ({
    /**
     * Format: "uuid".
     */
    id?: string | null;
    /**
     * Format: "uuid".
     */
    parentId?: string | null;
    /**
     * Format: "uuid".
     */
    addressId?: string | null;
    isDefaultAddress?: boolean | null;
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
    region?: {
      /**
       * Max Length: 3.
       * Min Length: 2.
       */
      country?: string | null;
      /**
       * Max Length: 6.
       * Min Length: 1.
       */
      region?: string | null;
    } & Record<string, any>;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    regionDescription?: string | null;
    /**
     * Max Length: 40.
     */
    cityName?: string | null;
    /**
     * Max Length: 80.
     */
    streetName?: string | null;
    /**
     * Max Length: 10.
     */
    houseId?: string | null;
    /**
     * Max Length: 10.
     */
    postalCode?: string | null;
    /**
     * Max Length: 40.
     */
    countyName?: string | null;
    /**
     * Max Length: 40.
     */
    districtName?: string | null;
    /**
     * Max Length: 40.
     */
    streetPrefixName?: string | null;
    /**
     * Max Length: 40.
     */
    additionalStreetPrefixName?: string | null;
    /**
     * Max Length: 40.
     */
    streetSuffixName?: string | null;
    /**
     * Max Length: 40.
     */
    additionalStreetSuffixName?: string | null;
    /**
     * Max Length: 10.
     */
    postOfficeBoxId?: string | null;
    isPostOfficeBoxAddress?: boolean | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    formattedPostalAddressDescription?: string | null;
    /**
     * Max Length: 40.
     */
    additionalCityName?: string | null;
    /**
     * Max Length: 10.
     */
    additionalHouseId?: string | null;
    /**
     * Max Length: 40.
     */
    careOfName?: string | null;
    /**
     * Format: "float".
     */
    latitudeMeasure?: number | null;
    /**
     * Format: "float".
     */
    longitudeMeasure?: number | null;
    isInternalGeoLocation?: boolean | null;
    /**
     * Max Length: 5.
     * Min Length: 2.
     */
    correspondenceLanguage?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    correspondenceLanguageDescription?: string | null;
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
    /**
     * Format: "email".
     * Max Length: 255.
     * Min Length: 1.
     */
    eMail?: string | null;
    /**
     * Format: "uri".
     * Max Length: 1280.
     * Min Length: 1.
     */
    web?: string | null;
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
    phoneNormalisedNumber?: string | null;
    /**
     * Max Length: 40.
     * Min Length: 1.
     */
    mobileFormattedNumber?: string | null;
    /**
     * Max Length: 40.
     * Min Length: 1.
     */
    mobileNormalisedNumber?: string | null;
  } & Record<string, any>)[];
  identifications?: ({
    /**
     * Format: "uuid".
     */
    id?: string | null;
    /**
     * Max Length: 6.
     * Min Length: 1.
     */
    type?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    typeDescription?: string | null;
    /**
     * Max Length: 60.
     */
    identificationId?: string | null;
    /**
     * Format: "date".
     */
    validFrom?: string | null;
    /**
     * Format: "date".
     */
    validTo?: string | null;
    /**
     * Max Length: 40.
     * Min Length: 1.
     */
    identifierIssuingAgencyName?: string | null;
    /**
     * Format: "date".
     */
    entryDate?: string | null;
    /**
     * Max Length: 3.
     * Min Length: 2.
     */
    areaOfValidityCountry?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    areaOfValidityCountryDescription?: string | null;
    areaOfValidityRegion?: {
      /**
       * Max Length: 3.
       * Min Length: 2.
       */
      country?: string | null;
      /**
       * Max Length: 6.
       * Min Length: 1.
       */
      region?: string | null;
    } & Record<string, any>;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    areaOfValidityRegionDescription?: string | null;
  } & Record<string, any>)[];
  salesArrangements?: ({
    /**
     * Format: "uuid".
     */
    id?: string | null;
    /**
     * Format: "uuid".
     */
    salesOrganizationId?: string | null;
    /**
     * Max Length: 50.
     * Min Length: 1.
     */
    salesOrganizationDisplayId?: string | null;
    /**
     * Max Length: 40.
     */
    salesOrganizationName?: string | null;
    /**
     * Max Length: 2.
     * Min Length: 1.
     */
    distributionChannel?: string | null;
    /**
     * Max Length: 50.
     * Min Length: 1.
     */
    distributionChannelDescription?: string | null;
    /**
     * Max Length: 2.
     * Min Length: 1.
     */
    division?: string | null;
    /**
     * Max Length: 50.
     * Min Length: 1.
     */
    divisionDescription?: string | null;
    isMarkedForDeletion?: boolean | null;
    /**
     * Format: "uuid".
     */
    salesOfficeId?: string | null;
    /**
     * Max Length: 50.
     */
    salesOfficeDisplayId?: string | null;
    /**
     * Max Length: 40.
     */
    salesOfficeName?: string | null;
    /**
     * Format: "uuid".
     */
    salesGroupId?: string | null;
    /**
     * Max Length: 50.
     * Min Length: 1.
     */
    salesGroupDisplayId?: string | null;
    /**
     * Max Length: 40.
     */
    salesGroupName?: string | null;
    /**
     * Max Length: 2.
     * Min Length: 1.
     */
    deliveryPriority?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    deliveryPriorityDescription?: string | null;
    isCompleteDeliveryRequested?: boolean | null;
    /**
     * Max Length: 3.
     * Min Length: 3.
     */
    currency?: string | null;
    /**
     * Max Length: 50.
     * Min Length: 1.
     */
    currencyDescription?: string | null;
    /**
     * Max Length: 2.
     * Min Length: 1.
     */
    customerGroup?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    customerGroupDescription?: string | null;
    /**
     * Max Length: 2.
     * Min Length: 1.
     */
    customerPriceListType?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    customerPriceListTypeDescription?: string | null;
    /**
     * Max Length: 2.
     * Min Length: 1.
     */
    priceSpecificationCustomerGroup?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    priceSpecificationCustomerGroupDescription?: string | null;
    /**
     * Max Length: 4.
     * Min Length: 1.
     */
    cashDiscountTerms?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    cashDiscountTermsDescription?: string | null;
    incoterms?: {
      /**
       * Max Length: 3.
       * Min Length: 1.
       */
      classification?: string | null;
      /**
       * Max Length: 255.
       * Min Length: 1.
       */
      classificationDescription?: string | null;
      /**
       * Max Length: 28.
       * Min Length: 1.
       */
      transferLocationName?: string | null;
    } & Record<string, any>;
    blockingReasons?: {
      /**
       * Max Length: 2.
       * Min Length: 1.
       */
      invoicingBlockingReason?: string | null;
      /**
       * Max Length: 255.
       * Min Length: 1.
       */
      invoicingBlockingReasonDescription?: string | null;
      /**
       * Max Length: 2.
       * Min Length: 1.
       */
      deliveryBlockingReason?: string | null;
      /**
       * Max Length: 255.
       * Min Length: 1.
       */
      deliveryBlockingReasonDescription?: string | null;
      /**
       * Max Length: 2.
       * Min Length: 1.
       */
      orderBlockingReason?: string | null;
      /**
       * Max Length: 255.
       * Min Length: 1.
       */
      orderBlockingReasonDescription?: string | null;
      isSalesSupportBlocked?: boolean | null;
    } & Record<string, any>;
  } & Record<string, any>)[];
  hasContactPersons?: ({
    /**
     * Format: "uuid".
     */
    id?: string | null;
    /**
     * Format: "uuid".
     */
    contactId?: string | null;
    /**
     * Max Length: 10.
     */
    contactDisplayId?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    contactFormattedName?: string | null;
    isDefault?: boolean | null;
  } & Record<string, any>)[];
  relationships?: ({
    /**
     * Format: "uuid".
     */
    id?: string | null;
    /**
     * Format: "uuid".
     */
    relationshipId?: string | null;
    /**
     * Max Length: 8.
     * Min Length: 1.
     */
    directedRelationshipRole?: string | null;
    /**
     * Max Length: 255.
     */
    directedRelationshipRoleDescription?: string | null;
    /**
     * Format: "uuid".
     */
    businessPartnerId?: string | null;
    /**
     * Max Length: 10.
     * Min Length: 1.
     */
    businessPartnerDisplayId?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    businessPartnerFormattedName?: string | null;
    /**
     * Format: "uuid".
     */
    salesOrganizationId?: string | null;
    /**
     * Max Length: 50.
     * Min Length: 1.
     */
    salesOrganizationDisplayId?: string | null;
    /**
     * Max Length: 40.
     */
    salesOrganizationName?: string | null;
    /**
     * Max Length: 2.
     * Min Length: 1.
     */
    distributionChannel?: string | null;
    /**
     * Max Length: 255.
     */
    distributionChannelDescription?: string | null;
    /**
     * Max Length: 2.
     * Min Length: 1.
     */
    division?: string | null;
    /**
     * Max Length: 255.
     */
    divisionDescription?: string | null;
    isDefault?: boolean | null;
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
  } & Record<string, any>)[];
  accountTeamMembers?: ({
    /**
     * Format: "uuid".
     */
    id?: string | null;
    /**
     * Format: "uuid".
     */
    employeeId?: string | null;
    /**
     * Max Length: 20.
     * Min Length: 1.
     */
    employeeDisplayId?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    employeeFormattedName?: string | null;
    role?: string | null;
    /**
     * Max Length: 255.
     * Min Length: 1.
     */
    roleDescription?: string | null;
    /**
     * Format: "uuid".
     */
    salesOrganizationId?: string | null;
    /**
     * Max Length: 50.
     * Min Length: 1.
     */
    salesOrganizationDisplayId?: string | null;
    /**
     * Max Length: 40.
     */
    salesOrganizationName?: string | null;
    /**
     * Max Length: 2.
     * Min Length: 1.
     */
    distributionChannel?: string | null;
    /**
     * Max Length: 50.
     * Min Length: 1.
     */
    distributionChannelDescription?: string | null;
    /**
     * Max Length: 2.
     * Min Length: 1.
     */
    division?: string | null;
    /**
     * Max Length: 50.
     * Min Length: 1.
     */
    divisionDescription?: string | null;
    isDefault?: boolean | null;
    /**
     * Format: "date".
     */
    validFrom?: string | null;
    /**
     * Format: "date".
     */
    validTo?: string | null;
  } & Record<string, any>)[];
  salesTerritories?: ({
    /**
     * Format: "uuid".
     */
    id?: string | null;
    /**
     * Format: "uuid".
     */
    salesTerritoryId?: string | null;
    /**
     * Max Length: 6.
     * Min Length: 1.
     */
    salesTerritoryDisplayId?: string | null;
    /**
     * Max Length: 40.
     * Min Length: 1.
     */
    salesTerritoryName?: string | null;
    isBlockedForRealignmentRun?: boolean | null;
    isDefault?: boolean | null;
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
