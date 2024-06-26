import { DataTypes } from 'sequelize';
import db from '../database/db.js';


const User = db.define('tb_user', {
    name: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    }
});

export default User;