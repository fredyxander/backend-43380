export class ContactsManagerMemory{
    constructor(){
        this.contacts = [];
    };

    get(){
        try {
            return this.contacts;
        } catch (error) {
            throw error;
        }
    };

    async create(contact){
        try {
            contact.id=this.contacts.length+1;
            this.contacts.push(contact);
            return contact;
        } catch (error) {
            throw error;
        }
    };
}