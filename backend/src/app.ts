import express from 'express';
import cors from 'cors';
import allRouter from './routes/index.js';
const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

app.use('/api', allRouter);

/* const createAdmin = async () => {
    const data ={
        name:"Yash Mishra", gender:"male", password:"yashtesting", mobileNumber:"6299700545",picture:"rkfasdj"
    }
    try {
        await registerTeacherService(data)
        console.log("Admin created successfully");
    } catch( error ) {
        console.log(error);
    }
}
createAdmin(); */
export default app;