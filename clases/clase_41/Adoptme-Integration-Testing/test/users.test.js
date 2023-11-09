import mongoose from "mongoose";
import Users from "../src/dao/Users.dao.js";
import Assert from "assert";
import userModel from "../src/dao/models/User.js";

const assert = Assert.strict;

const testDB = "url mongo db test";

await mongoose.connect(testDB);
console.log("base de datos de prueba conectada");

describe("Pruebas para manager de usuarios (users DAO)", async()=>{

    before(function(){
        this.usersManager = new Users();
    });

    beforeEach(async function(){
        await userModel.deleteMany({});
    });
    // after(function(){
    //     console.log("after");
    // });

    // afterEach(function(){
    //     console.log("afterEach");
    // });

    it("El metodo get debe retornar un arreglo de usuarios",async function(){
        const response = await this.usersManager.get();
        assert.strictEqual(Array.isArray(response),true);
    });

    it("El metodo save debe guardar un usuario en la base de datos",async function(){
        const mockUser = {
            first_name:"pepe",
            last_name:"perez",
            email:"pepe@gmail.com",
            password:"coder"
        };
        const response = await this.usersManager.save(mockUser);
        assert.ok(response._id);
    });

    it("Al agregar un nuevo usuario, éste debe crearse con un arreglo de mascotas vacío por defecto.", async function(){
        const mockUser = {
            first_name:"pepe",
            last_name:"perez",
            email:"pepe@gmail.com",
            password:"coder"
        };
        const response = await this.usersManager.save(mockUser);
        console.log(response);
        assert.deepStrictEqual(response.pets,[]);
    });

    it("El Dao puede obtener  a un usuario por email", async function(){
        const mockUser = {
            first_name:"pepe",
            last_name:"perez",
            email:"pepe@gmail.com",
            password:"coder"
        };
        const response = await this.usersManager.save(mockUser);
        const userEmail = response.email;
        const responseUser = await this.usersManager.getBy({email:userEmail});
        assert.strictEqual(responseUser.first_name,"pepe");
    });
});