import express, { Application } from 'express';
import { connectMongo } from './config/mongoConnection';
import { userRouter } from './routes/user.routes';
import { requestLogger } from './middlewares/logger';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));
const { PORT, MONGO_URL }: any = process.env;

(async() => {
  try {
    await connectMongo(MONGO_URL);
  } catch (error) {
    console.error('Error starting Mongo:', error);
  }
})();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/api/v1/user', requestLogger, userRouter);

process.on("uncaughtException", (err) => {
  console.log("Uncaught Error:", err);
})

app.listen(PORT, () => {
  console.log(MONGO_URL);
  
  console.log(`Server running on ${PORT}`)
});
