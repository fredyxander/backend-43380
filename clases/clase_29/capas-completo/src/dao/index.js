import { UsersMongo } from "./mongo/managers/users.mongo.js";
import { OrdersMongo } from "./mongo/managers/orders.mongo.js";
import { BusinessMongo } from "./mongo/managers/business.mongo.js";

const usersDao = new UsersMongo();
const ordersDao = new OrdersMongo();
const businessDao = new BusinessMongo();

export {usersDao, ordersDao, businessDao}