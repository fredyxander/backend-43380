import dotenv from "dotenv";
dotenv.config();

export const config  = {
    server:{
        port:process.env.PORT || 8080,
    },
    mongo:{
        URL: process.env.MONGO_URL || 'http://localhost:27017',
    }
};