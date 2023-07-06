import path from 'path';
import multer from "multer";
import { fileURLToPath } from 'url';
export const __dirname = path.dirname(fileURLToPath(import.meta.url));

//diskStorage => almacenamiento en memoria
const storageFiles = multer.diskStorage({
    //destination: carpeta donde se van a guardar las imagenes
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,"/public/img"))
    },
    //filename: con que nombre se va a guardar el archivo
    filename: function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname)
    }
});

//middleware de multer
export const uploader = multer({storage:storageFiles});
