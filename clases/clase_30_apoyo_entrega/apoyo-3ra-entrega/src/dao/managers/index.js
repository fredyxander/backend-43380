import { ProductsMongo } from "./mongo/productsMongo.js";
import {UsersMongo} from "./mongo/usersMongo.js";
import {TicketsMongo} from "./mongo/ticketsMongo.js";
import {CartsMongo} from "./mongo/cartsMongo.js";

export const productsDao = new ProductsMongo();
export const usersDao = new UsersMongo();
export const ticketsDao = new TicketsMongo();
export const cartsDao = new CartsMongo();