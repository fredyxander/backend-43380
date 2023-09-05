import { ProductsMongo } from "./mongo/productsMongo.js";
import {UsersMongo} from "./mongo/usersMongo.js";

export const productService = new ProductsMongo();
export const usersService = new UsersMongo();