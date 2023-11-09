import app from "../src/app.js";
import supertest from "supertest";
import chai from "chai";
import petModel from "../src/dao/models/Pet.js";

const expect = chai.expect;
const requester = supertest(app);//elemento para hacer peticiones al servidor.

describe("Pruebas app Mascotas", function(){
    describe("Test modulo mascotas", function(){
        this.timeout(15000);

        before(async function(){
            await petModel.deleteMany({});
        });

        it("Debe poderse crear una mascota con imagen", async()=>{
            const petMock = {
                name:"Pelusa",
                specie:"Gato",
                birthDate:"01-01-2020"
            };
            const response = await requester.post("/api/pets/withimage")
                .field("name",petMock.name)
                .field("specie", petMock.specie)
                .field("birthDate", petMock.birthDate)
                .attach("image","./test/images/toby.jpg")
            expect(response.body).to.have.property("status");
            expect(response.body.status).to.be.equal("success");
        });
    });

});