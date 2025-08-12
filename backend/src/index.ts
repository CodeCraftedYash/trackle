import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './db/connect.js';

dotenv.config();

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT);
  })
  .catch((err) => {
    process.exit(1);
  });
