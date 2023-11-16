import mongoose from "mongoose";

const cartsCollection = "carts";

const cartsSchema = new mongoose.Schema({
    products:{
        type:[//tipo array
            {
                quantity:{
                    type:Number,
                    default:1
                },
                productId:{//cada elemento es de tipo objeto, y contiene el id de un documento que pertenece a la coleccion "products"
                    type:mongoose.Types.ObjectId,
                    ref:"products"
                }
            }
        ],
        default:[]
    }
});

export const cartsModel = mongoose.model(cartsCollection, cartsSchema);