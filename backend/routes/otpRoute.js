import express from 'express';
import { sendOtpSms, verifyOtp } from '../config/twilioSetup.js';
const router = express.Router();

router.post('/send', (req, res) => {
  const { phoneNumber } = req.body;
  try {
    if (!phoneNumber) {
      return res.status(400).json({ error: 'Phone number is required' });
    }
    sendOtpSms(phoneNumber);
    return res.status(200).json({ message: 'OTP sent successfully' });
  } catch (err) {
    console.log('Error occurred while sending otp verification:', err);
  }
});

router.post('/verify', (req, res) => {
  try {
    const { otp, phoneNumber } = req.body;
    verifyOtp(otp, phoneNumber);
    return res.status(200).json({ message: 'OTP verified successfully' });
  } catch (err) {
    console.log('Error occurred while verifying otp:', err);
  }
});

export default router;
