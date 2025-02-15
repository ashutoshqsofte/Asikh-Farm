const nodemailer = require('nodemailer');
const { ClientCredentials } = require('simple-oauth2');

async function sendMail() {
  // Set up the OAuth2 client
  const oauth2Client = new ClientCredentials({
    client: {
      id: '88763fd4-687f-44eb-9f12-33d925d48327',
      secret: '29576b4f-d54c-4e48-bad7-892287c2232d',
    },
    auth: {
      tokenHost:
        'https://login.microsoftonline.com/8eda17d4-32bf-4cb4-adcf-d4d415915d82',
      tokenPath: '/oauth2/v2.0/token',
    },
    options: {
      bodyFormat: 'json',
    },
  });

  // Get the access token
  const result = await oauth2Client.getToken();
  const accessToken = result.access_token;

  // Set up the Nodemailer transport
  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      type: 'OAuth2',
      user: 'abhijeet@qsofte.com',
      accessToken: accessToken,
    },
  });

  // Set up the email options
  const mailOptions = {
    from: 'abhijeet@qsofte.com',
    to: 'abhijeet.hyd@gmail.com',
    subject: 'Hello',
    text: 'Hello world',
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

sendMail();
