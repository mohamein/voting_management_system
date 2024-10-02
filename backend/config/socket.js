import NotificationModel from '../models/Notification.js';

export const socketSetup = (io) => {
  io.on('connection', async (socket) => {
    const notifications = await NotificationModel.find();

    socket.emit('initial-notification', notifications);

    socket.on('disclose', () => {
      console.log('client disconnected');
    });
  });
};
