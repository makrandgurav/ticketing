// database/connection.ts
import mongoose from 'mongoose';
import { UserModel } from '../models/users.model';

export const connectMongo = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/ticketing', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions); // Adding type assertion to ConnectOptions
    console.log('MongoDB connected: ticketing');
    await createAdmin();
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