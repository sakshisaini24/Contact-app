const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://contactlist:contactlist@cluster0.cba0imq.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
const mongoDB = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true },async (err, result) => {
        if (err) {
            console.log('---', err);
        } else {
            console.log("connected");
        }
    });
}
module.exports = mongoDB;
