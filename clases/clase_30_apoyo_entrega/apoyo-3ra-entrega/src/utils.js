import bcrypt from "bcrypt";
import path from 'path';
import { fileURLToPath } from 'url';
export const __dirname = path.dirname(fileURLToPath(import.meta.url));
//__dirname en cualquier archivo donde sea importada tendra la ruta de la carpeta src

// export const variable ---  export {variable}
// import {variable}

export const createHash = (password)=>{
    return bcrypt.hashSync(password,bcrypt.genSaltSync());
};

export const isValidPassword = (userDB,password)=>{
    return bcrypt.compareSync(password,userDB.password);
}