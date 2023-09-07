import dotenv from "dotenv";
dotenv.config();
// console.log(process.env);

export const config = {
    server:{
        port:process.env.PORT,
        secretToken:process.env.SECRET_TOKEN
    },
    mongo:{
        url:process.env.MONGO_URL
    }
}
// console.log("config: ", config);