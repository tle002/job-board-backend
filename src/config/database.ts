import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export const connectDB = async () => {
    try {
        await pool.getConnection();
        console.log('MySQL connected');
    } catch (error) {
        console.error('MySQL connection error:', error);
        process.exit(1);
    }
};

export const getConnection = async () => {
    return await pool.getConnection();
};