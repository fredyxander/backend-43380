import dotenv from "dotenv";
dotenv.config();

export const config = {
    server:{
        port:process.env.PORT || 8080,
        secretSession:process.env.SECRET_SESSION,
        persistence: process.env.PERSISTENCE,
    },
    mongo:{
        url:process.env.MONGO_URL
    }
};