import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_AUTH_TOKEN;
const serviceToken = process.env.TWILIO_SERVICE_TOKEN;

const client = new twilio(accountSid, authToken);

export const sendOtpSms = (phoneNumber) => {
  client.verify
    .services(serviceToken)
    .verifications.create({ to: phoneNumber, channel: 'sms' })
    .then((verification) => console.log(verification))
    .catch((error) => console.log(error));
};

export const verifyOtp = (otp, phoneNumber) => {
  client.verify
    .services(serviceToken)
    .verificationChecks.create({ to: phoneNumber, code: otp })
    .then((verification_check) => {
      if (verification_check.status === 'approved') {
        console.log('success');
      } else {
        console.log('failed');
      }
    })
    .catch((error) => console.log(error));
};
