import express from "express";
import { petsRouter } from "./routes/pets.routes.js";
import { usersRouter } from "./routes/users.routes.js";
import { __dirname } from "./utils.js";
import path from "path";

const port = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));//entender json de formularios
app.use(express.static(path.join(__dirname,"/public")));

app.listen(port,()=>console.log(`server listening on port ${port}`));

//routes
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);