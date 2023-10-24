import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import { gmailTransporter } from "../config/gmail.config.js";

export const generateEmailToken = (email, expireTime)=>{
    //genera el token
    const token = jwt.sign({email},config.gmail.secretToken,{expiresIn:expireTime});
    return token;
};

//funcion para generar enlace con token
export const recoveryEmail = async(req,userEmail,emailToken)=>{
    try {
        const domain = `${req.protocol}://${req.get('host')}`;
        const link = `${domain}/reset-password?token=${emailToken}`;
        //Enviar el correo con el enlace
        await gmailTransporter.sendMail({
            from:"Ecommerce pepito",
            to: userEmail,
            subject:"Restablece tu contraseña",
            html: `
                <p>Solicitaste restablecer tu contraseña</p>
                <p>Da click en este enlace: <a href=${link}>Restablecer constraseña</a></p>
            `
        });
    } catch (error) {
        console.log(`Hubo un error ${error.message}`);
    }
};