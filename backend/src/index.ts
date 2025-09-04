import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import connectDB from './db/connect.js';

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    process.exit(1);
  });
