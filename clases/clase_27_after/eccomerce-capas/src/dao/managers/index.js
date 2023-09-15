import { ProductsMongo } from "./mongo/productsMongo.js";
import {UsersMongo} from "./mongo/usersMongo.js";

export const productsDao = new ProductsMongo();
export const usersDao = new UsersMongo();