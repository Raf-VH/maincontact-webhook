/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type {
  Accountqueryresponse,
  Accountcreaterequest,
  Accountfile,
  Accountpatchupdaterequest
} from './schema';
/**
 * Representation of the 'AccountApi'.
 * This API is part of the 'SalesSvcCloudV2_accountService' service.
 */
export const AccountApi = {
  _defaultBasePath: undefined,
  /**
   * Specify query parameters to return desired account records from the system.
   * @param queryParameters - Object containing the following keys: $skip, $top, $search, $filter, $orderby, $select, $exclude, $count, $query.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  queryaccountserviceAccount: (queryParameters?: {
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
    new OpenApiRequestBuilder<Accountqueryresponse>(
      'get',
      '/sap/c4c/api/v1/account-service/accounts',
      {
        queryParameters
      },
      AccountApi._defaultBasePath
    ),
  /**
   * Send account information to the system to create a new account.
   * @param body - Request body.
   * @param queryParameters - Object containing the following keys: $sourceid, $sourcetype.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  createaccountserviceAccount: (
    body: Accountcreaterequest | undefined,
    queryParameters?: { $sourceid?: string; $sourcetype?: string }
  ) =>
    new OpenApiRequestBuilder<Accountfile>(
      'post',
      '/sap/c4c/api/v1/account-service/accounts',
      {
        body,
        queryParameters
      },
      AccountApi._defaultBasePath
    ),
  /**
   * Read a specific account using the account ID.
   * @param id - Account ID
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  readaccountserviceAccount: (id: string) =>
    new OpenApiRequestBuilder<Accountfile>(
      'get',
      '/sap/c4c/api/v1/account-service/accounts/{id}',
      {
        pathParameters: { id }
      },
      AccountApi._defaultBasePath
    ),
  /**
   * Update account attributes in the system.
   * @param id - Account ID
   * @param body - Request body.
   * @param headerParameters - Object containing the following keys: If-Match.
   * @returns The request builder, use the `execute()` method to trigger the request.
   */
  partialupdateaccountserviceAccount: (
    id: string,
    body: Accountpatchupdaterequest | undefined,
    headerParameters: { 'If-Match': string }
  ) =>
    new OpenApiRequestBuilder<any>(
      'patch',
      '/sap/c4c/api/v1/account-service/accounts/{id}',
      {
        pathParameters: { id },
        body,
        headerParameters
      },
      AccountApi._defaultBasePath
    )
};
