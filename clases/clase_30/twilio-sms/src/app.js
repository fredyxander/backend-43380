import express from "express";
import {transporter, adminEmail} from "./config/email.js";
import { __dirname } from "./utils.js";
import path from "path";
import {twilioClient, twilioPhone} from "./config/twilio.js";

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

const clientPhone = "+PHONE CLIENTE";
//Ruta para envio de sms
app.post("/sms-twilio", async(req,res)=>{
    try {
        //logica de finalizacion de la compra, y registo en db.
        const info = await twilioClient.messages.create({
            body:"Tu registro fue exitoso",
            from:twilioPhone,
            to:clientPhone
        });
        console.log(info);
        res.json({status:"success", message:"Registro exitoso y sms enviado"});
    } catch (error) {
        console.log(error.message);
        res.json({status:"error", message:"El sms no se pudo enviar"});
    }
});