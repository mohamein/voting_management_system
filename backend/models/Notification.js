import { Schema, model } from 'mongoose';

const notificationSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamp: true,
  }
);

const NotificationModel = new model('Notification', notificationSchema);

export default NotificationModel;
