import {mongoose} from "mongoose";
import { MONGODB_URI } from "../config.js";

try {
  const db = await mongoose.connect(MONGODB_URI);
  console.log("Database is connected to", db.connection.name);
} catch (error) {
  console.error(error.message);
}

// mongodb+srv://gustavoavi568:Asd456.@cluster0.ch6yjo1.mongodb.net/Concurso
// mongoose.connect('mongodb+srv://gustavoavi568:Asd456.@cluster0.ch6yjo1.mongodb.net/Concurso?retryWrites=true&w=majority', {
// mongoose.connect('mongodb+srv://uga:uga456@cluster0.rgl68zc.mongodb.net/uga?retryWrites=true&w=majority', {
// await mongoose.connect(
//     'mongodb+srv://uga:uga456@cluster0.rgl68zc.mongodb.net/uga?retryWrites=true&w=majority', 
//     {}
// )
// .then(db =>console.log('Base Conectada atlas'))
// .catch(err=>console.log(err));


//? Local MongoDB
// mongoose
    // .connect("mongodb://localhost/form", {})
    // .then((db) => console.log("DataBase is Connect Local"))
    // .catch((err) => console.error(err));





export default mongoose;