import OtpModel from '../models/OtpModel.js';
import { sendOtpSms } from '../config/twilioSetup.js';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const formatPhoneNumber = (phoneNumber) => {
  // Check if the number starts with '+', if not, add the appropriate country code
  if (!phoneNumber.startsWith('+')) {
    return `+252${phoneNumber}`; // Replace +1 with your specific country code
  }
  return phoneNumber;
};

export const sendOtp = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    // Format the phone number
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

    // Validate the phone number
    const parsedNumber = parsePhoneNumberFromString(formattedPhoneNumber);
    if (!parsedNumber || !parsedNumber.isValid()) {
      return res.status(400).json({ error: 'Invalid phone number format' });
    }

    // Generate random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    console.log(formattedPhoneNumber);

    // Send OTP via SMS
    await sendOtpSms(formattedPhoneNumber, otp);

    // const newOtp = await OtpModel.create({
    //   otp,
    // });

    return res.status(200).json({ message: 'OTP sent successfully' });
  } catch (err) {
    console.log('Error occurred while sending otp verification:', err);
  }
};
