//funcion que genere errores de forma estructurada y generica.
export class CustomError{
    static createError({name,cause,message,errorCode=1}){
        const error = new Error(message,{cause});
        error.name=name;
        error.code=errorCode;
        console.log("error generado: ", error.cause);
        // {
        //     name:,
        //     cause,
        //     message,
        //     code
        // }
        throw error;
    }
};