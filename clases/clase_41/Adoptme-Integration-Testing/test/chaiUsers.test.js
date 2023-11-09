import mongoose from "mongoose";
import Users from "../src/dao/Users.dao.js";
import userModel from "../src/dao/models/User.js";
import chai from "chai";

const expect = chai.expect;

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

    it("El metodo get debe retornar un arreglo de usuarios",async function(){
        const response = await this.usersManager.get();
        expect(response).to.deep.equal([]);
    });

    it("El metodo save debe guardar un usuario en la base de datos",async function(){
        const mockUser = {
            first_name:"pepe",
            last_name:"perez",
            email:"pepe@gmail.com",
            password:"coder"
        };
        const response = await this.usersManager.save(mockUser);
        expect(response).to.have.property('_id');
    });

    it("Al agregar un nuevo usuario, éste debe crearse con un arreglo de mascotas vacío por defecto.", async function(){
        const mockUser = {
            first_name:"pepe",
            last_name:"perez",
            email:"pepe@gmail.com",
            password:"coder"
        };
        const response = await this.usersManager.save(mockUser);
        // console.log(response);
        // assert.deepStrictEqual(response.pets,[]);
        expect(response).to.have.property('pets');
        expect(response.pets).to.deep.equal([]);
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
        // assert.strictEqual(responseUser.first_name,"pepe");
        expect(responseUser.first_name).to.be.equal("pepe");
    });

    it("El metodo update debe actualizar al usuario", async function(){
        const mockUser = {
            first_name:"Pepe",
            last_name:"Perez",
            email:"pepe@gmail.com",
            password:"coder"
        };
        const response = await this.usersManager.save(mockUser);
        const userId = response._id;
        const user = await this.usersManager.getBy({_id:userId});
        expect(user.last_name).to.be.equal("Perez");
        user.last_name = "Gomez";
        const responseUpdate = await this.usersManager.update(userId,user);
        // console.log(responseUpdate);
        expect(responseUpdate.last_name).to.be.equal("Gomez");
    });
});