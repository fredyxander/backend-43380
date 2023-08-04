import { PetsMongo } from "./managers/petsMongo.js";
import { UsersMongo } from "./managers/usersMongo.js";

export const petsService = new PetsMongo();
export const usersService = new UsersMongo();