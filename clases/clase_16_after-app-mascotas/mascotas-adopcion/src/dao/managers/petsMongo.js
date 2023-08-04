import { petsModel } from "../models/pets.model.js";

export class PetsMongo{
    constructor(){
        this.model=petsModel;
    };

    async savePet(pet){
        try {
            const petCreated = await this.model.create(pet);
            return petCreated;
        } catch (error) {
            throw error;
        }
    };

    async getPets(){
        try {
            const pets = await this.model.find().lean();
            return pets;
        } catch (error) {
            throw error;
        }
    };

    async getPet(petId){
        try {
            // const pet = await this.model.find({_id:petId});
            const pet = await this.model.findById(petId);
            if(!pet){
                throw new Error("La mascota no existe");
            }
            return pet;
        } catch (error) {
            throw error;
        }
    };

    async updatePet(petId, newData){
        try {
            const petUpdated = await this.model.findByIdAndUpdate(petId,newData,{new:true});
            if(!petUpdated){
                throw new Error("La mascota no existe");
            }
            return petUpdated;
        } catch (error) {
            throw error;
        }
    };

    async deletePet(petId){
        try {
            const pet = await this.getPet(petId);
            if(pet){
                await this.model.findByIdAndDelete(petId);
                return "Mascota eliminada";
            }
        } catch (error) {
            throw error;
        }
    };
};