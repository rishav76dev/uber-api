import express from 'express';
import { authCaptain } from '../middleware/auth.middleware.js';
import { registerValidation, loginValidation } from '../validators/captain.validator.js';
import { getCaptainProfile, loginCaptain, logoutCaptain, registerCaptain } from '../controllers/captain.controller.js';

const router = express.Router();

router.post("/register" ,registerValidation  , registerCaptain)

router.post("/login" , loginValidation , loginCaptain)

router.get("/profile" , authCaptain , getCaptainProfile)

router.get("/logout" , authCaptain , logoutCaptain)

export default router;