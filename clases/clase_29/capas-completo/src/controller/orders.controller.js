import {OrdersService} from "../services/orders.service.js";
import {BusinessService} from "../services/business.service.js";
import {UsersService} from "../services/users.service.js";

export class OrdersController{
    static getAllOrders = async(req,res)=>{
        try {
            const orders = await OrdersService.getAllOrders();
            res.send({status:"success", result:orders});
        } catch (error) {
            res.status(400).json({status:"error", message:error.message});
        }
    };

    static getOrderById = async(req,res)=>{
        try {
            const orderId = req.params.oid;
            const order = await OrdersService.getOrderById(orderId);
            res.send({status:"success", result:order});
        } catch (error) {
            res.status(400).json({status:"error", message:error.message});
        }
    };

    static createOrder = async(req,res)=>{
        try {
            const { orderNumber, userId, businessId, products } = req.body;
            const user = await UsersService.getUserById(userId);
            const business = await BusinessService.getBusinessById(businessId);
            //obtenemos los productos del negocio con su id y precio.
            const productsOrder = business.products.filter(product=>products.includes(product.id));
            //calculamos el total del pedido
            const total = productsOrder.reduce((acc,i)=>acc = acc+i.price, 0 );
            //creamos la orden
            const newOrder = {
                orderNumber: orderNumber,
                business: businessId,
                user:userId,
                products:productsOrder.map(p=>p.id),
                totalPrice:total,
                status: "pendiente"
            }
            //creamos la orden en la base de datos
            const orderCreated = await OrdersService.createOrder(newOrder);
            //actualizamos el usuario con la orden
            user.orders.push(orderCreated._id);
            const userUpdate = await UsersService.updateUser(userId, user);
            res.send({status:"success", result: orderCreated});
        } catch (error) {
            res.status(400).json({status:"error", message:error.message});
        }
    };

    static resolveOrder = async(req,res)=>{
        try {
            const orderId = req.params.oid;
            const order = await OrdersService.getOrderById(orderId);
            order.status="completada";
            await OrdersService.resolveOrder(orderId,order);
            res.send({status:"success", result:"orden completada"});
        } catch (error) {
            res.status(400).json({status: "error", message:error.message});
        }
    };
};