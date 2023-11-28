import dotenv from "dotenv";
dotenv.config();

export const config = {
    stripe:{
        key:process.env.STRIPE_BACKEND_KEY
    }
};