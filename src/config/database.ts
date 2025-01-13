import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || '3306'),
});

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('MySQL connected');

        // Sync all models
        await sequelize.sync({ force: false }); // Set force to true to drop and recreate tables
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('MySQL connection error:', error);
        process.exit(1);
    }
};

export const getConnection = async () => {
    return sequelize;
};

export default sequelize;