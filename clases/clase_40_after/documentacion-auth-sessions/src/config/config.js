import dotenv from "dotenv";
dotenv.config();

export const config = {
    server:{
        port:process.env.PORT,
        secretSession:process.env.SECRET_SESSION
    },
    mongo:{
        url:process.env.MONGO_URL
    },
    gmail:{
        account:process.env.GMAIL_SALES,
        password:process.env.GMAIL_SALES_PASSWORD,
        secretToken:process.env.SECRET_TOKEN_EMAIL
    }
};