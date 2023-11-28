import express from "express";
import cors from "cors";

import { paymentsRouter } from "./routes/payments.routes.js";

const port= 8080;
const app = express();

app.use(cors());

app.listen(port,()=>console.log(`Server listening on port ${port}`));

app.use("/api/payments", paymentsRouter);