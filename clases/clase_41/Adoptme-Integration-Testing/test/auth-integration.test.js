import app from "../src/app.js";
import supertest from "supertest";
import chai from "chai";
import userModel from "../src/dao/models/User.js";

const expect = chai.expect;
const requester = supertest(app);//elemento para hacer peticiones al servidor.

describe("Pruebas app Mascotas", function(){
    describe("Test modulo sessions", function(){
        const mockUser = {
            first_name:"Pepe",
            last_name:"Perez",
            email:"pepe@gmail.com",
            password:"coder"
        };
        this.timeout(15000);

        before(async function(){
            await userModel.deleteMany({});
            this.cookie;
        });

        it("Se dede registrar al usuario correctamente", async()=>{
            const response = await requester.post("/api/sessions/register").send(mockUser);
            expect(response.body).to.have.property("status");
            expect(response.body.status).to.be.equal("success");
        });

        it("Se debe loguear al usuario registrado correctamente", async()=>{
            const loginUser = {
                email:mockUser.email,
                password: mockUser.password
            };
            const response = await requester.post("/api/sessions/login").send(loginUser);
            const cookieResponse = response.headers['set-cookie'][0];
            const cookieData = {
                name:cookieResponse.split("=")[0],
                value:cookieResponse.split("=")[1],
            }// ["coderCookie", "value"]
            // console.log(cookieData);
            this.cookie = cookieData;
            expect(this.cookie.name).to.be.equal("coderCookie");
        });

        it("La cookie debe contener la informacion del usuario que se genero con el token", async()=>{
            const response = await requester.get("/api/sessions/current").set("Cookie",[`${this.cookie.name}=${this.cookie.value}`]);
            // console.log(response);
            expect(response.body.payload).to.have.property("email");
            expect(response.body.payload.email).to.be.equal(mockUser.email);
        });

    });

});