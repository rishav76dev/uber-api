
import userModel from "../models/user.model.js";

export const createUser = async ({ firstname, lastname, email, password }) => {
    try {
        if (!firstname || !lastname || !email || !password) {
            throw new Error("All fields are required");
        }

        const user = await userModel.create({
            fullname: {
                firstname,
                lastname
            },
            email,
            password
        });

        return user;
    } catch (error) {
        console.error("Error creating user:", error.message);
        throw error; // rethrow so the calling function knows an error occurred
    }
}
