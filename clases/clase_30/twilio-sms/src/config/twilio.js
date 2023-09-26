import twilio from "twilio";

//Agregar credenciales para conectarse a twilio
const twilioAccountId="TWILIO ACCOUNT ID";
const twilioAccountToken="TWILIO TOKEN";
const twilioPhone="+TWILIO PHONE";

//Crear el cliente para conectar con twilio
const twilioClient = twilio(twilioAccountId,twilioAccountToken);

export {twilioClient, twilioPhone};