import express from 'express';
import cors from 'cors';
import allRouter from './routes/index.js';

const app = express();
const allowedOrigins = [process.env.FRONTEND_URL, process.env.PROD_FRONTEND_URL].filter(Boolean) as string[];
console.log('FRONTEND_URL:', process.env.FRONTEND_URL);
console.log('PROD_FRONTEND_URL:', process.env.PROD_FRONTEND_URL);

app.use(cors({
  origin: allowedOrigins ,
  
  credentials: true
}));
app.use(express.json());

app.use('/api', allRouter);

export default app;