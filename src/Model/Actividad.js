// import mongoose from "mongoose";
import mongoose  from "mongoose";


var actividadSchema = new mongoose.Schema(
    {
        //id referencia a sector
        SectorId: {type: mongoose.Schema.Types.ObjectId, ref: 'sectores'},
        SubSectorId: {type: mongoose.Schema.Types.ObjectId, ref: 'subsectores'},

        Actividad: {
            type: String,
            required: [true, "The Actividad is required "],
            trim: true,
            maxlength: [500, "Actividad cannot be grater than 500 characters"],
          },

        Descripcion: {
            type: String,
            required: [true, "The Descripcion is required "],
            trim: true,
            maxlength: [300, "Descripcion cannot be grater than 300 characters"],
          },
       
        CIIU_4: {
            type: String,
            required: [true, "The CIIU_4 is required "],
            trim: true,
            maxlength: [20, "CIIU_4 cannot be grater than 20 characters"],
          },
        
        Codigo: {
            type: String,
            required: [true, "The Codigo is required "],
            trim: true,
            maxlength: [7, "Codigo cannot be grater than 7 characters"],
          },

        Unidad: {
            type: String,
            required: [true, "The Unidad is required "],
            trim: true,
            maxlength: [150, "title cannot be grater than 150 characters"],
          },
        
        Categoria: {
            type: Number,
            required: [true, "The Categoria is required "],
            trim: true,
            maxlength: [1, "Categoria cannot be grater than 1 characters"],
          },
    },{
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.actidades || mongoose.model("actividades", actividadSchema);
// export default mongoose.model('subsectores', actividadSchema);


