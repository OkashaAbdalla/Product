// config/database.js
import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
//function to connect to mongoDB connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1);  // Exit if database fails
  }
};

module.exports = connectDB;