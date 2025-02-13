# Maincontact Webhook

We will create a webhook for Contacts from the Sales Cloud v2.
We will create a webhook that will automatically changes the 'MainContact' field of a Contact, when it becomes a Maincontact of an Account.

## Generate service entities

Install the `@sap-cloud-sdk/openapi-generator` package.

```
  npm install @sap-cloud-sdk/openapi-generator
```

Create a folder `/service-specs` at the root of the project. Download the JSON API Specification for the [Account](https://api.sap.com/api/SalesSvcCloudV2_accountService/overview) + [Contact](https://api.sap.com/api/SalesSvcCloudV2_contactPersonService/overview) service.
And place it in the newly created folder.

Next generate the service entities with the following command:

```
  npx openapi-generator --input ./service-specs --outputDir services
```
