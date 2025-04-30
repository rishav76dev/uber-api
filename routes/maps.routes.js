import express from 'express';
import { authCaptain, authUser } from '../middleware/auth.middleware'; 
import { query } from 'express-validator';
const router = express.Router();

export default router;