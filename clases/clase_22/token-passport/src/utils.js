import jwt from "jsonwebtoken";
import path from 'path';
import { fileURLToPath } from 'url';

export const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const SECRET_TOKEN = "secretCoderToken";

export const generateToken = (infoUser)=>{
    const token = jwt.sign(infoUser,SECRET_TOKEN);
    return token;
};

export const validateToken = ()=>{

};