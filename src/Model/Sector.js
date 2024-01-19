import mongoose  from "mongoose";

var sectorSchema = new mongoose.Schema(
    {
        SectorNombre: {
            type: String,
            required: [true, "The Sector Nombre is required "],
            unique: true,
            trim: true,
            maxlength: [100, "title cannot be grater than 100 characters"],
          },

        
    },{
        timestamps: true,
        versionKey: false
    }
);

export default mongoose.sectores || mongoose.model("sectores", sectorSchema);

// export default mongoose.model('sectores', sectorSchema);


