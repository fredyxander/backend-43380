import Stripe from "stripe";
import { config } from "../config/config.js";

export class PaymentService{
    constructor(){
        this.stripe = new Stripe(config.stripe.key);
    };

    createPaymentIntent = async(paymentInfo)=>{
        const paymentIntent = this.stripe.paymentIntents.create(paymentInfo);
        return paymentIntent;
    };
}