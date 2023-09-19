import express from "express";
import { config } from "./config/config.js";

import {contactsRouter} from "./routes/contacts.routes.js";
import { productsRouter } from "./routes/products.routes.js";

const port = config.server.port;
const app = express();

//middlewares
app.use(express.json());

app.listen(port,()=>console.log(`Server listening on port: ${port}`));

//routes
app.use("/api/contacts", contactsRouter);
app.use("/api/products", productsRouter);