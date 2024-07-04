import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const connectToDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {});

    if (connection) {
      console.log('Connected To Database');
    } else {
      console.log('No Connection To Database');
    }
  } catch (err) {
    console.log(`Error at Connecting to MongoDb: ${err.message}`);
  }
};

export default connectToDb;
