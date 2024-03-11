const express = require('express');
const cors = require('cors');
//const connectDB = require('./config/db');
require('dotenv').config();

const app = express();


//connectDB();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());







app.listen(process.env.PORT , () => {
  console.log(`Server is running on port ${process.env.PORT} `);
});