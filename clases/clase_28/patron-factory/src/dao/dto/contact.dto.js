export class ContactDto{
    constructor(contact){
        this.name = contact.name;
        this.lastname=contact.lastname;
        this.fullName = `${contact.name} ${contact.lastname}`;
        this.email = contact.email
    };
};