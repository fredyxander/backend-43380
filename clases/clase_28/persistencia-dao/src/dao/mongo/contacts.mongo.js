import {contactsModel} from "./models/contacts.model.js";

export class ContactsManagerMongo{
    constructor(){
        this.model = contactsModel;
    };

    async get(){
        try {
            const contacts = await this.model.find();
            return contacts;
        } catch (error) {
            throw error;
        }
    };

    async create(contact){
        try {
            const contactCreated = await this.model.create(contact);
            return contactCreated;
        } catch (error) {
            throw error;
        }
    };
};