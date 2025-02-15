require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { ConfidentialClientApplication } = require('@azure/msal-node');

const app = express();
app.use(bodyParser.json());

const SERVER_PORT = process.env.PORT || 3000;

const msalConfig = {
  auth: {
    clientId: process.env.CLIENT_ID,
    authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}`,
    clientSecret: process.env.CLIENT_SECRET,
  },
};

const pca = new ConfidentialClientApplication(msalConfig);

async function getAccessToken() {
  const tokenRequest = {
    scopes: ['https://graph.microsoft.com/.default'], // Use .default for client credentials flow
    skipCache: true, // Skip caching and force request to Azure AD
  };
  try {
    const response = await pca.acquireTokenByClientCredential(tokenRequest);
    return response.accessToken;
  } catch (error) {
    console.error('Error acquiring token:', error);
    throw new Error('Error acquiring token');
  }
}

app.post('/sendEmail', async (req, res) => {
  const { email, message } = req.body;
  try {
    const accessToken = await getAccessToken();
    await axios.post(
      'https://graph.microsoft.com/v1.0/me/sendMail',
      {
        message: {
          subject: 'Contact Us Form',
          body: {
            contentType: 'HTML',
            content: 'Test From me ',
          },
          toRecipients: [
            { emailAddress: { address: 'abhijeet.hyd@gmail.com' } },
          ],
        },
        saveToSentItems: 'true',
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    res.send({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(
      'Failed to send email:',
      JSON.stringify(error.response.data, null, 2)
    );
    res.status(500).send({ error: 'Failed to send email' });
  }
});

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
