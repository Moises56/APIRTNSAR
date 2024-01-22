import { config } from "dotenv";
config();

import express from "express";
import morgan from "morgan";
import cors from "cors";
// import bodyParser from "body-parser";
// import database from "./Module/database.js";

// Routes
// import indexRoutes from "./Routes/index.routes.js";
import apiRTN from "./Routes/apiRTN.routes.js";
import apiRTNl from "./Routes/apiLocal.routes.js";


// Initialize express
const app = express();




// middlewares
app.use(morgan("dev"));
app.use(express.json()) //? Leer Json del body
app.use(express.urlencoded({extended: false})) //? leer datos de formularios
app.use(cors()); //*para connectar

// routes
// app.use(indexRoutes);
app.use(apiRTN);
app.use(apiRTNl);

// listening the Server
const port = process.env.PORT || 3001;



app.listen(port, () => {
  console.log('Servidor del backend levantado en puerto:', port);
});