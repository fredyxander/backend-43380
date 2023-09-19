import { config } from "../config/config.js";

const persistence = config.server.persistence; // mongo, memory, sql, filesystem

let contactsDao;
let productsDao;
let cartsDao;

switch (persistence) {
    case "mongo":
        //importar la conexion a la base de datos de mongo
        const {connectDB} = await import("../config/dbConnection.js");
        connectDB();
        //importar los managers
        const {ContactsManagerMongo} = await import("./mongo/contacts.mongo.js");
        const {ProductsManagerMongo} = await import("./mongo/products.mongo.js");
        contactsDao = new ContactsManagerMongo();
        productsDao = new ProductsManagerMongo();
        break;

    case "memory":
        const {ContactsManagerMemory} = await import("./memory/contacts.memory.js");
        const {ProductsManagerMemory} = await import("./memory/products.memory.js");
        contactsDao = new ContactsManagerMemory();
        productsDao = new ProductsManagerMemory();
        break;

    default:
        break;
}

export {contactsDao, productsDao, cartsDao};