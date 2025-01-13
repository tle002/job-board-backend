import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Job extends Model {
    public id!: number;
    public title!: string;
    public company!: string;
    public location!: string;
    public salary!: number;
    public description!: string;
}

Job.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    company: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    location: {
        type: new DataTypes.STRING(128),
        allowNull: false,
    },
    salary: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    description: {
        type: new DataTypes.STRING(1024),
        allowNull: false,
    },
}, {
    tableName: 'jobs',
    sequelize,
});

export default Job;