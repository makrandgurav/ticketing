import express, { Application } from 'express';
import { connectMongo } from './config/mongoConnection';

const app: Application = express();

(async() => {
  try {
    await connectMongo();
  } catch (error) {
    console.error('Error starting Mongo:', error);
  }
})();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5500, () => {
  console.log('Server running on 5500')
});
