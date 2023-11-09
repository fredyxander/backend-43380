import app from "../src/app.js";
import supertest from "supertest";
import chai from "chai";
import petModel from "../src/dao/models/Pet.js";

const expect = chai.expect;
const requester = supertest(app);//elemento para hacer peticiones al servidor.

describe("Pruebas app Mascotas", function(){
    describe("Pruebas del modulo pets", function(){

        this.timeout(10000);

        beforeEach(async()=>{
            await petModel.deleteMany({});
        });

        it("El endpoint POST /api/pets debe crear una mascota correctamente en la db", async()=>{
            const petMock = {
                name:"Pelusa",
                specie:"Gato",
                birthDate:"01-01-2020"
            };
            const response = await requester.post("/api/pets").send(petMock);
            // console.log(response);
            expect(response.body.status).to.be.equal("success");
            expect(response.body.payload).to.have.property("_id");
            expect(response.body.payload.name).to.be.equal(petMock.name);
        });

        it("Al crear una mascota sólo con los datos elementales. Se debe corroborar que la mascota creada cuente con una propiedad adopted:false", async()=>{
            const petMock = {
                name:"Pelusa",
                specie:"Gato",
                birthDate:"01-01-2020"
            };
            const response = await requester.post("/api/pets").send(petMock);
            expect(response.body.payload).to.have.property("adopted");
            expect(response.body.payload.adopted).to.be.equal(false);
        });

        it("Si se desea crear una mascota sin el campo nombre, el módulo debe responder con un status 400." , async ()=>{
            const petMock = {
                specie:"Gato",
                birthDate:"01-01-2020"
            };
            const response = await requester.post("/api/pets").send(petMock);
            // console.log(response);
            expect(response.statusCode).to.be.equal(400);
        });

        it("Al obtener a las mascotas con el método GET, la respuesta debe tener los campos status y payload. Además, payload debe ser de tipo arreglo.", async()=>{
            const response = await requester.get("/api/pets");
            // console.log(response);
            expect(response.body).to.have.property("status");
            expect(response.body).to.have.property("payload");
            // expect(response.body.payload).to.be.ok();
            expect(response.body.payload).to.be.deep.equal([]);
        });
    });
});