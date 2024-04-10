
import mongoose from "mongoose";

// crear esquema con los siguiente campos RTN:string CONTRIBUYENTE:string NOMBRE_COMERCIAL:string AÑO:number, CANTIDAD_DECLARADA: number

var dataAmdcOnSchema = new mongoose.Schema(
    {
        DNI_RTN: {
        type: String,
        required: [true, "The RTN is required"],
        trim: true,
        maxlength: [14, "RTN cannot be greater than 14 characters"],
        },
        ICS: {
        type: String,
        required: [true, "The ICS is required"],
        trim: true,
        // maxlength: [100, "ICS cannot be greater than 100 characters"],
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
        ACTIVIDAD_ECONOMICA: {
            type: String,
            required: [true, "The Actividad Economica is required"],
            trim: true,
            // maxlength: [100, "Actividad Economica cannot be greater than 100 characters"],
        },
        ANIO: {
        type: Number,
        required: [true, "The Año is required"],
        trim: true,
        maxlength: [4, "Año cannot be greater than 4 characters"],
        },
        FECHA_DE_DECLARACION: {
            type: String,
            required: [true, "The Fecha de Declaracion is required"],
            trim: true,
            // maxlength: [100, "Fecha de Declaracion cannot be greater than 100 characters"],
        },
        CANTIDAD_DECLARADA: {
        type: Number,
        required: [true, "The Cantidad Declarada is required"],
        trim: true,
        // maxlength: [100, "Cantidad Declarada cannot be greater than 100 characters"],
        },

    },
    {
        timestamps: true,
        versionKey: false,
    }
    );

export default mongoose.models.dataAmdcOn || mongoose.model("dataAmdcOn", dataAmdcOnSchema);
