import { DataTypes } from "sequelize";
import db from '../database/db.js';

const Product = db.define('tb_product', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    },
    image_1: {
        type: DataTypes.STRING
    },
    image_2: {
        type: DataTypes.STRING
    },
    image_3: {
        type: DataTypes.STRING
    },
    minStoke: {
        type: DataTypes.INTEGER
    },
    maxStoke: {
        type: DataTypes.INTEGER
    },
    currentStoke: {
        type: DataTypes.INTEGER
    }
})

export default Product;