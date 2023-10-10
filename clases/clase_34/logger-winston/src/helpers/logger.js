import winston from "winston";

//crear el transporte: El sistema de almacenamiento para los logs(registros)
const logger = winston.createLogger({
    transports:[
        //definir los transportes del sistema de registros
        new winston.transports.Console({level:"verbose"})
    ]
});

export {logger};