import express from 'express';
import { registerValidation, loginValidation } from "../validators/user.validator.js";
import { getUserProfile, loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";
import { authUser } from "../middleware/auth.middleware.js";


const router = express.Router();

router.post("/register" ,registerValidation , registerUser  )

router.post("/login" , loginValidation , loginUser)

router.get("/profile" , authUser , getUserProfile)

router.get("/logout" , authUser , logoutUser)

export default router;