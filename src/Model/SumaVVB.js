// crear modelo para la suma de ventas brutas, con los siguientes campos: {id: 1, RTN: rtn, nombreEmpresa: empresa sumaAMDC: amdc, sumaSar: sar, anio: "2019", usuario: "admin"}

import mongoose  from "mongoose";

var sumaVentaSchema = new mongoose.Schema(

    {
        RTN: {
            type: String,
            required: [true, "The RTN is required "],
            trim: true,
            maxlength: [100, "title cannot be grater than 100 characters"],
          },
          nombreEmpresa: {
            type: String,
            required: [true, "The nombre Empresa is required "],
            trim: true,
            maxlength: [100, "title cannot be grater than 100 characters"],
          },
          sumaAMDC: {
            type: String,
            required: [true, "The suma AMDC is required "],
            trim: true,
            maxlength: [100, "title cannot be grater than 100 characters"],
          },
          sumaSar: {
            type: String,
            required: [true, "The suma Sar is required "],
            trim: true,
            maxlength: [100, "title cannot be grater than 100 characters"],
          },
          anio: {
            type: String,
            required: [true, "The anio is required "],
            trim: true,
            maxlength: [100, "title cannot be grater than 100 characters"],
          },
          usuario: {
            type: String,
            required: [true, "The usuario is required "],
            trim: true,
            maxlength: [100, "title cannot be grater than 100 characters"],
          },
    },{
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.sumaVentas || mongoose.model("sumaVentas", sumaVentaSchema);

