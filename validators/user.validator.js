import { body } from 'express-validator';

export const registerValidation = [
    body("email").isEmail().withMessage("Invalid email"),
    body("fullname.firstname").isLength({min:3}).withMessage("Firstname should be atleast 3 characters long"),
    body("password").isLength({min:6}).withMessage("Password should be atleast 6 characters long"),
]

export const loginValidation = [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({min:6}).withMessage("Password should be atleast 6 characters long"),
]