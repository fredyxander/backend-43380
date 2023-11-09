import chai from "chai";
import { createHash, passwordValidation } from "../src/utils/index.js";
import UserDTO from "../src/dto/User.dto.js";

const expect = chai.expect;

describe("Pruebas para bcrypt y dto de usuarios", async()=>{

    it("El servicio debe realizar un hasheo efectivo de la contraseña (debe corroborarse que el resultado sea diferente a la contraseña original", async function(){
        const passOriginal = "coder";
        const hashExp = /(?=[A-Za-z0-9@#$%/^.,{}&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/g;
        const hash = await createHash(passOriginal);
        expect(hashExp.test(hash)).to.be.equal(true);
    });

    it("El hasheo realizado debe poder compararse de manera efectiva con la contraseña original (la comparación debe resultar en true)", async function(){
        const passOriginal = "coder";
        const hash = await createHash(passOriginal);
        const mockUser = {
            password:hash
        }
        const result = await passwordValidation(mockUser,passOriginal);
        expect(result).to.be.equal(true);
    });

    it("Por parte del DTO de usuario: Corroborar que el DTO unifique el nombre y apellido en una única propiedad. (Recuerda que puedes evaluar múltiples expects)", async function(){
        const mockUser = {
            first_name:"pepe",
            last_name:"Diaz",
            email:"pepe@gmail.com",
            role:"admin"
        };
        const result = UserDTO.getUserTokenFrom(mockUser);
        expect(result).to.have.property("name");
        expect(result.name).to.be.equal(`${mockUser.first_name} ${mockUser.last_name}`);
    });

});