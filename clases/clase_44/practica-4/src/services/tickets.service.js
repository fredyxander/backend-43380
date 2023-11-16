import {ticketsDao} from "../dao/managers/index.js";

export class TicketsService {
    static async createTicket(ticketInfo){
        return await ticketsDao.createTicket(ticketInfo);
    };
};