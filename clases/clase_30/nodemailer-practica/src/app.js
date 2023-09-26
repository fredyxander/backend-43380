import express from "express";
import {transporter, adminEmail} from "./config/email.js";
import { __dirname } from "./utils.js";
import path from "path";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Servidor ejecutando en el puerto ${port}`));

//Crear el contenido del correo o cuerpo del mensaje
const emailTemplate = `
    <div>
        <h1>Bienvenido!!</h1>
        <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub.jpg" style="width:250px"/>
        <p>Ya puedes empezar a usar nuestros servicios</p>
        <a href="https://www.google.com/">Explorar</a>
    </div>
`;

//Agregar la estructura del correo

const userEmail = "CORREO CLIENTE";
//Endpoint para enviar el correo
app.post("/send-emailCoder", async(req,res)=>{
    try {
        const info = await transporter.sendMail({
            from:"Eccomerce pepito",
            to:userEmail, //correo del destinatario puede ser cualquiera.
            subject:"Correo para restablecer contraseña",
            html:emailTemplate
        });
        console.log(info);
        res.json({status:"success", message:`Correo enviado a ${userEmail} exitosamente`});
    } catch (error) {
        console.log(error.message);
        res.json({status:"error", message:"El correo no se pudo enviar"});
    }
});


//correo con imagenes
const emailTemplateImages = `
    <div>
        <h1>Bienvenido!!</h1>
        <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub.jpg" style="width:250px"/>
        <p>Ya puedes empezar a usar nuestros servicios</p>
        <a href="https://www.google.com/">Explorar</a>
        <p>imagen cargada desde archivo</p>
        <img src="cid:gatoCoder"/>
    </div>
`;

app.post("/send-emailImages", async(req,res)=>{
    try {
        const info = await transporter.sendMail({
            from:"Eccomerce pepito",
            to:userEmail, //correo del destinatario puede ser cualquiera.
            subject:"Correo para restablecer contraseña",
            html:emailTemplate,
            attachments:[
                {
                    filename:"gato.jpg",
                    path:path.join(__dirname,"/images/gato.jpg"),
                    cid:"gatoCoder"
                }
            ]
        });
        console.log(info);
        res.json({status:"success", message:`Correo enviado a ${userEmail} exitosamente`});
    } catch (error) {
        console.log(error.message);
        res.json({status:"error", message:"El correo no se pudo enviar"});
    }
});