# Flight Status Webhook for Dialogflow

This is a simple Express.js webhook for Dialogflow to simulate flight status checking.

## How to Deploy on Render

1. Go to https://render.com
2. Create a new Web Service
3. Connect this repo or upload these files
4. Set the build command: `npm install`
5. Set the start command: `npm start`
6. Deploy and use the `/webhook` endpoint in Dialogflow Fulfillment

## Endpoint

```
POST /webhook
```

## Response Format

Returns a simple text response using the flight number and travel date extracted by Dialogflow.
