
import mongoose from "mongoose";

// crear esquema con los siguiente campos RTN:string CONTRIBUYENTE:string NOMBRE_COMERCIAL:string AÑO:number, CANTIDAD_DECLARADA: number

var datosAmdcCsSchema = new mongoose.Schema(
    {
        RTN: {
        type: String,
        required: [true, "The RTN is required"],
        trim: true,
        maxlength: [14, "RTN cannot be greater than 14 characters"],
        },
        CONTRIBUYENTE: {
        type: String,
        required: [true, "The Contribuyente is required"],
        trim: true,
        maxlength: [100, "Contribuyente cannot be greater than 100 characters"],
        },
        NOMBRE_COMERCIAL: {
        type: String,
        required: [true, "The Nombre Comercial is required"],
        trim: true,
        // maxlength: [100, "Nombre Comercial cannot be greater than 100 characters"],
        },
        ANIO: {
        type: Number,
        required: [true, "The Año is required"],
        trim: true,
        maxlength: [4, "Año cannot be greater than 4 characters"],
        },
        CANTIDAD_DECLARADA: {
        type: Number,
        required: [true, "The Cantidad Declarada is required"],
        trim: true,
        // maxlength: [100, "Cantidad Declarada cannot be greater than 100 characters"],
        },
        //ESTATUS 0 O 1
        ESTATUS: {
        type: Number,
        required: [true, "The Estatus is required"],
        trim: true,
        // maxlength: [1, "Estatus cannot be greater than 1 characters"],
        },
        //FECHA CON EL SIGUIENTE FORMATO: 18/3/2022  10:55:43
        FECHA: {
        type: String,
        required: [true, "The Fecha is required"],
        trim: true,
        // maxlength: [20, "Fecha cannot be greater than 20 characters"],
        },

    },
    {
        timestamps: true,
        versionKey: false,
    }
    );

export default mongoose.models.datosAmdcCs || mongoose.model("datosAmdcCs", datosAmdcCsSchema);
