import { Router } from "express";
import { OrdersController } from "../controller/orders.controller.js";

const router = Router();

router.get("/", OrdersController.getAllOrders);
router.get("/:oid", OrdersController.getOrderById);
router.post("/", OrdersController.createOrder);
router.put("/:oid", OrdersController.resolveOrder);

export {router as ordersRouter};