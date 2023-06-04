const mongoose = require('mongoose')
mongoose.set("strictQuery", false);
const {Schema}= mongoose;
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    }, 
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
});

module.exports= mongoose.model("user", UserSchema);