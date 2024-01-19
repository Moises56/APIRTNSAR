import mongoose  from "mongoose";


var solicitudSchema = new mongoose.Schema(
    {
      Apoderado: {
        type: String,
        required: [true, "The Apoderadi is required "],
        trim: true,
        maxlength: [200, "title cannot be grater than 200 characters"],
      },
        DNI: {
            type: String,
            required: [true, "The DNI is required "],
            unique: true,
            trim: true,
            maxlength: [14, "title cannot be grater than 14 characters"],
          },
        Solicitante: {
            type: String,
            required: [true, "The Solicitante is required "],
            trim: true,
            maxlength: [200, "title cannot be grater than 200 characters"],
          },
        
        Proyecto: {
            type: String,
            required: [true, "The Proyecto is required "],
            trim: true,
            maxlength: [200, "title cannot be grater than 200 characters"],
          },
        Correo: {
            type: String,
            required: [true, "The Correo is required "],
            trim: true,
            maxlength: [100, "title cannot be grater than 100 characters"],
          },
        
        Telefono: {
            type: String,
            required: [true, "The Telefono is required "],
            trim: true,
            maxlength: [100, "title cannot be grater than 100 characters"],
          },
        
        Direccion: {
            type: String,
            required: [true, "The Direccion is required "],
            trim: true,
            maxlength: [200, "title cannot be grater than 200 characters"],
          },
        
        Sector: {
            type: String,
            required: [true, "The Sector is required "],
            trim: true,
            maxlength: [100, "title cannot be grater than 100 characters"],
          },
        
        SubSector: {
            type: String,
            required: [true, "The SubSector is required "],
            trim: true,
            maxlength: [100, "title cannot be grater than 100 characters"],
          },
        
        Actividad: {
            type: String,
            required: [true, "The Actividad is required "],
            trim: true,
            maxlength: [100, "title cannot be grater than 100 characters"],
          },
        
        Unidad: {
            type: String,
            required: [true, "The Unidad is required "],
            trim: true,
            maxlength: [150, "title cannot be grater than 150 characters"],
          },
        
        Categoria: {
            type: String,
            required: [true, "The Categoria is required "],
            trim: true,
            maxlength: [1, "Categoria cannot be grater than 1 characters"],
          },
        
        Descripcion: {
            type: String,
            required: [true, "The Descripcion is required "],
            trim: true,
            maxlength: [200, "title cannot be grater than 200 characters"],
          },
        
        Unidades: {
            type: String,
            required: [true, "The Unidades is required "],
            trim: true,
            maxlength: [100, "title cannot be grater than 100 characters"],
          },
        
        Observacion: {
            type: String,
            required: [true, "The Observacion is required "],
            trim: true,
            maxlength: [200, "title cannot be grater than 200 characters"],
        },
        Aprovado: {
            type: Boolean,
            default: false
        },

    },{
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.solicitudes || mongoose.model("solicitudes", solicitudSchema);

