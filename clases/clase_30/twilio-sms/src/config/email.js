import nodemailer from "nodemailer";

const adminEmail="CORREO GMAIL ADMIN";
const adminPass = "PASS GMAIL";

//creamos el transporte para enviar los correos con gmail
const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    auth:{
        user:adminEmail,
        pass:adminPass
    },
    secure:false,
    tls:{
        rejectUnauthorized:false
    }
});

export {transporter, adminEmail};