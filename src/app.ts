import express from 'express';
import bodyParser from 'body-parser';
//import setJobRoutes from './routes/jobRoutes';
import dotenv from 'dotenv';
import { connectDB } from './config/database';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//app.use(bodyParser.json());

// Connect to the database
connectDB();

//setJobRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});