import { config } from "dotenv";
config();

export const MONGODB_URI =
process.env.MONGODB_URI || "mongodb://localhost/sarapi";

export const PORT = process.env.PORT || 3001;
export const SECRET = "yoursecretkey";

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@localhost";
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";