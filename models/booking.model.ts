import mongoose from 'mongoose';

const trainSchema = new mongoose.Schema({
  trainNumber: {
    type: Number,
    required: true,
  },
  seatsBooked: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true,
  }
}, { timestamps: true });

export const TrainModel = mongoose.model('bookings', trainSchema);