import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "./config/config.js";
import path from 'path';
import { fileURLToPath } from 'url';
export const __dirname = path.dirname(fileURLToPath(import.meta.url));


export const createHash = (password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync());
};

export const isValidPassword = (userDB,password)=>{
    return bcrypt.compareSync(password,userDB.password);
};

export const validateToken = (token)=>{
    try {
        const info = jwt.verify(token,config.gmail.secretToken);
        return info.email;
    } catch (error) {
        console.log("Error con el token", error.message);
        return null;
    }
};