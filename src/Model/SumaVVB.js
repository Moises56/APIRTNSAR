import mongoose from "mongoose";

var sumaVentaSchema = new mongoose.Schema(
  {
    // id del usuario referenciado del modelo User
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    RTN: {
      type: String,
      required: [true, "The RTN is required"],
      trim: true,
      maxlength: [100, "RTN cannot be greater than 100 characters"],
    },
    nombreEmpresa: {
      type: String,
      required: [true, "The nombre Empresa is required"],
      trim: true,
      maxlength: [100, "Nombre Empresa cannot be greater than 100 characters"],
    },
    sumaAMDC: {
      type: String,
      required: [true, "The suma AMDC is required"],
      trim: true,
      maxlength: [100, "Suma AMDC cannot be greater than 100 characters"],
    },
    sumaSar: {
      type: String,
      required: [true, "The suma Sar is required"],
      trim: true,
      maxlength: [100, "Suma Sar cannot be greater than 100 characters"],
    },
    diferencia: {
      type: String,
      required: [true, "The diferencia is required"],
      trim: true,
      maxlength: [100, "Diferencia cannot be greater than 100 characters"],
    },
    anio: {
      type: String,
      required: [true, "The anio is required"],
      trim: true,
      maxlength: [4, "Anio cannot be greater than 4 characters"],
    },
    usuario: {
      type: String,
      required: [true, "The usuario is required"],
      trim: true,
      maxlength: [100, "Usuario cannot be greater than 100 characters"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.models.sumaVentas || mongoose.model("sumaVentas", sumaVentaSchema);
