import { Schema, model } from 'mongoose';

const otpSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    otp: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expire: 300,
    },
  },
  {
    timestamp: true,
  }
);

const Otp = model('Otp', otpSchema);

export default Otp;
