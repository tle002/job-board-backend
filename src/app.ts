import express from 'express';
import bodyParser from 'body-parser';
import setJobRoutes from './routes/jobRoutes';
import dotenv from 'dotenv';
import { connectDB } from './config/database';
import {setupSwagger} from "./config/swagger";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to the database
connectDB().then(() => {
    setupSwagger(app);
    // Set up routes after the database connection is established
    setJobRoutes(app);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Failed to connect to the database:', error);
});