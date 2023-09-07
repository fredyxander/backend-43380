import dotenv from "dotenv";
import { __dirname } from "../utils.js";
import path from "path";

// console.log(process.env)
const mode = "production";// process.env.NODE_ENV;

dotenv.config({
    path: mode === "development" ? path.join(__dirname,"../.env.development") : path.join(__dirname,"../.env.production")
});
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
console.log("config: ", config);