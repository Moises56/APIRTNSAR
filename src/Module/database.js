import {mongoose} from "mongoose";

// mongodb+srv://gustavoavi568:Asd456.@cluster0.ch6yjo1.mongodb.net/Concurso
// mongoose.connect('mongodb+srv://gustavoavi568:Asd456.@cluster0.ch6yjo1.mongodb.net/Concurso?retryWrites=true&w=majority', {
mongoose.connect('mongodb+srv://uga:uga456@cluster0.rgl68zc.mongodb.net/uga?retryWrites=true&w=majority', {
    // useUnifiedTopology: true,
    // useNewUrlParser: true, 
    // useFindAndModify: false,
    // useCreateIndex: true
})
.then(db =>console.log('Base Conectada'))
.catch(err=>console.log(err));


//? Local MongoDB
// mongoose
    // .connect("mongodb://localhost/form", {})
    // .then((db) => console.log("DataBase is Connect Local"))
    // .catch((err) => console.error(err));

export default mongoose;