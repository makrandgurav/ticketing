import express, { Application } from 'express';
import { connectMongo } from './config/mongoConnection';
import { userRouter } from './routes/user.routes';
import { requestLogger } from './middlewares/logger';
import path from 'path';

const app: Application = express();
app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));

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

app.use('/api/v1/user', requestLogger, userRouter);

process.on("uncaughtException", (err) => {
  console.log("Uncaught Error:", err);
})

app.listen(5500, () => {
  console.log('Server running on 5500')
});
