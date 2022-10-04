
const { Sequelize } = require('sequelize');
require("dotenv").config();

const DB_DATABASE = process.env.DB_DATABASE; 
const DB_USERNAME = process.env.DB_USERNAME; 
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST; 

const connection = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host : DB_HOST,
    dialect : 'mysql'
})

const pruebaconnection = async(connection) =>{
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }};

pruebaconnection(connection);