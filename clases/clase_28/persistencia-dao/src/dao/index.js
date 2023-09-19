import { ContactsManagerMongo } from "./mongo/contacts.mongo.js";
import { ContactsManagerMemory } from "./memory/contacts.memory.js";

export const contactsDao = new ContactsManagerMongo();