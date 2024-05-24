// database/connection.ts
import mongoose from 'mongoose';
import { TrainModel } from '../models/trains.model';
import { UserModel } from '../models/users.model';

export const connectMongo = async (MONGO_URL: string) => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions); // Adding type assertion to ConnectOptions
    console.log('MongoDB connected: ticketing');
    await createAdmin();
    await createTrains();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};


const createAdmin = async () => {
  try {
    await UserModel.findOneAndUpdate({username: 'admin'}, {
      username: 'admin',
      password: 'admin',
      role: 'ADMIN'
    }, { upsert: true }).exec();

    console.log('Admin user created');
  } catch (error) {
    console.log('Error creating admin user');
  }
}

const createTrains = async () => {
  try {
    await TrainModel.findOneAndUpdate({trainNumber: 22439}, {
      trainNumber: 22439,
      trainName: 'Vande Bharat Express'
    }, { upsert: true }).exec();
    await TrainModel.findOneAndUpdate({trainNumber: 12049}, {
      trainNumber: 12049,
      trainName: 'Gatimaan Express'
    }, { upsert: true }).exec();
    await TrainModel.findOneAndUpdate({trainNumber: 12002}, {
      trainNumber: 12002,
      trainName: 'Shatabdi Express'
    }, { upsert: true }).exec();
    await TrainModel.findOneAndUpdate({trainNumber: 12951}, {
      trainNumber: 12951,
      trainName: 'Rajdhani Express'
    }, { upsert: true }).exec();
    await TrainModel.findOneAndUpdate({trainNumber: 12034}, {
      trainNumber: 12034,
      trainName: 'Kanpur Shatabdi Express'
    }, { upsert: true }).exec();
    console.log('Trains have been added');

    console.log('Admin user created');
  } catch (error) {
    console.log('Error adding trains');
  }
}