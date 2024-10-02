import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

export const sendOtpSms = async (otp, to) => {
  try {
    const resp = await client.messages.create({
      body: `Here is your otp code ${otp} please do not share it with anybody`,
      from: '+13345648876',
      to,
    });
    console.log(resp.id);
  } catch (err) {
    console.log(err);
  }
};
