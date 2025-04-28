import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";


import { connectDB } from './db/db.js';


const app = express();
dotenv.config()

connectDB()
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser())

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Uber backend API' });
});

export default app;