import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";


import { connectDB } from './db/db.js';
import userRoutes from './routes/user.routes.js';
import captainRoutes from './routes/captain.routes.js';
import rideRoutes from './routes/rides.routes.js';


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

app.use("/api/v1/users" , userRoutes);
app.use("/api/v1/captains" , captainRoutes);
app.use("/api/v1/rides" , rideRoutes);

export default app;