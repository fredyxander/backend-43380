import fs from "fs";

export class ProductManager{
    constructor(path){
        this.path=path;
    };

    async getProducts(){
        return fs.promises.readFile(this.path,"utf-8");
    };
}

// module.exports = {ProductManager}