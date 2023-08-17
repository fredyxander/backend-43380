import { connectDB } from "../config/dbConnection.js";
import { UsersMongo } from "./managers/users.mongo.js";

connectDB();
export const usersService = new UsersMongo();