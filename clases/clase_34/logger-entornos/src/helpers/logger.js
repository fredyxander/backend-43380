import winston from "winston";
import dotenv from "dotenv";
dotenv.config();

const currentEnv = process.env.LOGGER;

//crear el transporte: El sistema de almacenamiento para los logs(registros)
const devLogger = winston.createLogger({
    transports:[
        new winston.transports.Console({level:"verbose"})
    ]
});

const prodLogger = winston.createLogger({
    transports:[
        new winston.transports.Console({level:"http"}),
        new winston.transports.File({filename:"./logs/errors.log", level:"warn"})
    ]
});

//definir el logger dependiendo el ambiente
export const addLogger = ()=>{
    let logger;
    if(currentEnv === "development"){
        logger = devLogger;
    } else {
        logger = prodLogger;
    };
    return logger;
};