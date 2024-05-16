import express, { Application } from 'express';
import mongoose from 'mongoose'

const app = express();


app.listen(5500, () => {
  console.log('Server running on 5500')
});
