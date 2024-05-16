import express, { Application } from 'express';
import { connectMongo } from './config/mongoConnection';

const app: Application = express();
app.set('view engine', 'ejs');

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

app.get('/', (req, res) => {
  res.render('login')
})

app.listen(5500, () => {
  console.log('Server running on 5500')
});
