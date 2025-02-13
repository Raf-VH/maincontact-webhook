/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  ContactPersonqueryresponse,
  ContactPersoncreaterequest,
  ContactPersonfile,
  ContactPersonpatchupdaterequest
} from './schema';
/**
 * Representation of the 'ContactPersonApi'.
 * This API is part of the 'SalesSvcCloudV2_contactPersonService' service.
 */
export const ContactPersonApi = {
  _defaultBasePath: undefined,
  /**
   * Specify query parameters to return desired contact person records from the system.
   * @param queryParameters - Object containing the following keys: $skip, $top, $search, $filter, $orderby, $select, $exclude, $count, $query.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  querycontactpersonserviceContactperson: (queryParameters?: {
    $skip?: number;
    $top?: number;
    $search?: string;
    $filter?: string;
    $orderby?: string;
    $select?: string;
    $exclude?: string;
    $count?: boolean;
    $query?: string;
  }) =>
    new OpenApiRequestBuilder<ContactPersonqueryresponse>(
      'get',
      '/sap/c4c/api/v1/contact-person-service/contactPersons',
      {
        queryParameters
      },
      ContactPersonApi._defaultBasePath
    ),
  /**
   * Send contact person information to the system to create a new contact person.
   * @param body - Request body.
   * @param queryParameters - Object containing the following keys: $sourceid, $sourcetype.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createcontactpersonserviceContactperson: (
    body: ContactPersoncreaterequest | undefined,
    queryParameters?: { $sourceid?: string; $sourcetype?: string }
  ) =>
    new OpenApiRequestBuilder<ContactPersonfile>(
      'post',
      '/sap/c4c/api/v1/contact-person-service/contactPersons',
      {
        body,
        queryParameters
      },
      ContactPersonApi._defaultBasePath
    ),
  /**
   * Read a specific contact person using the contact person ID.
   * @param id - Contact Person ID
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readcontactpersonserviceContactperson: (id: string) =>
    new OpenApiRequestBuilder<ContactPersonfile>(
      'get',
      '/sap/c4c/api/v1/contact-person-service/contactPersons/{id}',
      {
        pathParameters: { id }
      },
      ContactPersonApi._defaultBasePath
    ),
  /**
   * Update contact person attributes in the system.
   * @param id - Contact Person ID
   * @param body - Request body.
   * @param headerParameters - Object containing the following keys: If-Match.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  partialupdatecontactpersonserviceContactperson: (
    id: string,
    body: ContactPersonpatchupdaterequest | undefined,
    headerParameters: { 'If-Match': string }
  ) =>
    new OpenApiRequestBuilder<any>(
      'patch',
      '/sap/c4c/api/v1/contact-person-service/contactPersons/{id}',
      {
        pathParameters: { id },
        body,
        headerParameters
      },
      ContactPersonApi._defaultBasePath
    )
};
