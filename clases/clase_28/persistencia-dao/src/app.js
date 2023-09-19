import express from "express";
import { config } from "./config/config.js";
import { connectDB } from "./config/dbConnection.js";

import {contactsRouter} from "./routes/contacts.routes.js";


const port = config.server.port;
const app = express();

//middlewares
app.use(express.json());

app.listen(port,()=>console.log(`Server listening on port: ${port}`));

//conexión db
connectDB();

//routes
app.use("/api/contacts", contactsRouter);