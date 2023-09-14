import mongoose from "mongoose";

export class MongoSingleton{
    static #instance;
    constructor(){
        mongoose.connect("mongodb+srv://fredy:coder@coderbackend.d0kaklh.mongodb.net/singletonDB?retryWrites=true&w=majority");
        console.log("base de datos conectada correctamente");
    };

    static async getInstance(){
        //validar si ya la base de datos esta conectada
        if(MongoSingleton.#instance){
            console.log("Base de datos ya conectada");
            return MongoSingleton.#instance;
        } else {
            this.#instance = new MongoSingleton();
            return this.#instance;
        }
    };
};