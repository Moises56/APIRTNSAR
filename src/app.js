import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
// import bodyParser from "body-parser";
// import database from "./Module/database.js";

// Routes sar
// import indexRoutes from "./Routes/index.routes.js";
import indexRoutes from "./Routes/index.routes.js";

import apiRTN from "./Routes/apiRTN.routes.js";
import apiRTNl from "./Routes/apiLocal.routes.js";

// Routes Users
import usersRoutes from "./Routes/user.routes.js";
import authRoutes from "./Routes/auth.routes.js";



// Initialize express
const app = express();

// Settings
app.set("port", process.env.PORT || 3001);
app.set("json spaces", 4);


// middlewares
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json()) //? Leer Json del body
app.use(express.urlencoded({extended: false})) //? leer datos de formularios
app.use(cors()); //*para connectar

// routes
app.use("/", indexRoutes);
app.use("/api", apiRTN);
app.use("/api", apiRTNl);

app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);



export default app;