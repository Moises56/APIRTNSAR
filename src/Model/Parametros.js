
import mongoose from "mongoose";

// crear esquema con los siguiente campos MONGODB_URI:string, 

var parametrosSchema = new mongoose.Schema( 
    {
        MONGODB_URI: { type: String, required: true },
        PORT: { type: String, required: true },
        SECRET: { type: String, required: true },
        ADMIN_EMAIL: { type: String, required: true },
        ADMIN_USERNAME: { type: String, required: true },
        ADMIN_PASSWORD: { type: String, required: true },
    }
    );

export default mongoose.model("Parametros", parametrosSchema);