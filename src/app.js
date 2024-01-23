import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

// Routes
import indexRoutes from "./Routes/index.routes.js";
import usersRoutes from "./Routes/user.routes.js";
import authRoutes from "./Routes/auth.routes.js";

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);
app.set("json spaces", 4);

// Middlewares
app.use(
  cors({
    // origin: "http://localhost:3000",
  })
);
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", indexRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);

export default app;
