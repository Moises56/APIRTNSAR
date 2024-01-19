import mongoose from "mongoose";

var subSectorSchema = new mongoose.Schema(
    {
        //id referencia a sector
        SectorID: {type: mongoose.Schema.Types.ObjectId, ref: 'sectores'},
        SubSectorNombre: {
            type: String,
            required: [true, "The SubSector Nombre is required "],
            unique: true,
            trim: true,
            maxlength: [100, "SubSector cannot be grater than 100 characters"],
          },
        Tipo:{
            type: String,
            required: [true, "The Tipo is required "],
            trim: true,
            maxlength: [10, "Tipo cannot be grater than 10 characters"],
          },
    },{
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.subsectores || mongoose.model("subsectores", subSectorSchema);

// export default mongoose.model('subsectores', subSectorSchema);


