import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
  },
  role: {
    type: String,
    enum: ['USER', 'ADMIN']
  }
});

export const UserModel = mongoose.model('user', userSchema)