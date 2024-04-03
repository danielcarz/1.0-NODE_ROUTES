const express = require('express');

//fronted url
const FRONTED_URL = process.env.FRONTED_URL  || "http://localhost:5173"; //ruta vite

// port app
const PORT = process.env.PORT || 3008;

//contection to database
DB_CONECTION = "mongodb+srv://db_user_one:E9ewP57AHDmz1oyd@cluster0.hma87kd.mongodb.net/testing_routes";

module.exports = { 
    FRONTED_URL,
    PORT,

};
