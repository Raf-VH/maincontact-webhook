# MainContact Webhook Documentation

## Overview

This repository contains the result of my student internship at TheValueChain, the project is focused on improving contact management within SAP Sales Cloud V2. During the analysis of the system, a key limitation was identified: there is no clear and automated indication of the main contact person in the contact overview.

A custom field named `MainContact` was added to the Contact entity. This field allows users to manually indicate which contact is the primary contact for a given account. However, this approach requires duplicate manual input: the main contact relationship must be set at the account level, and the `MainContact` field must be updated separately. This makes the process time-consuming and prone to human error.

To address this issue, an automated solution was developed in the form of the **MainContact Webhook**. This webhook automatically updates the `MainContact` field in the Contact entity whenever a contact is assigned as the main contact for an account. The goal is to ensure data consistency, reduce errors, and streamline the user experience.

### Functionality

The webhook is specifically built for SAP Sales Cloud V2 and integrates seamlessly with the standard account-contact structure. When the main contact relationship of an account is changed, the corresponding MainContact field in the linked contact is automatically updated in real-time.

### Documentation

All relevant documentation can be found in the `Documents` folder. This includes detailed technical documentation, configuration instructions, and usage guidelines for implementing and using the webhook within an SAP Sales Cloud environment.

## Setup & Deployment

### Prerequisites

- Node.js & npm
- SAP BTP Cloud Foundry
- SSCV2 environment
- Configured destinations & XSUAA service
- Configured Autoflow & Communication System in SSCV2

### Installation

1. Clone repository
2. Install dependencies:

```
npm install
```

3. Configure environment:
   The `DESTINATION_NAME` wil be the name of your subaccount destination in BTP.

```
DESTINATION_NAME=your_destination
```

4. Create subaccount destination in SAP BTP for API connection in SAP Sales Cloud V2

5. To create the necessary services for deployment, execute these commands:

```
# Create the destination service
cf create-service destination lite maincontact-webhook-destination
```

```
# Create the XSUAA service using your security configuration
cf create-service xsuaa application maincontact-webhook-xsuaa -c ./xs-security.json
```

6. Build application:

```
npm run build
```

7. Deploy:

```
cf push
```

8. Create service key on XSUAA instance

```
cf create-service-key maincontact-webhook-xsuaa webhook-service-key
```

9. Setup communication system & Configure Auth with service key credentials

10. Create autoflow that uses the communication system

Note: For more detailed explaination how to setup this project from zero, go to `Blueprint Webhook`
