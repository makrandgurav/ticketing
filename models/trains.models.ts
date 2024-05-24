import mongoose from 'mongoose';

const trainSchema = new mongoose.Schema({
  trainName: {
    type: String,
    required: true,
  },
  trainNumber: {
    type: Number,
    required: true,
  },
  totalSeats: {
    type: Number,
    default: 5
  },
  availableSeats: {
    type: Number,
    default: 5
  }
});

export const TrainModel = mongoose.model('trains', trainSchema);