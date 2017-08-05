var mongoose = require("mongoose");
var userSchema = mongoose.Schema({

    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    websites: [websites],
    dateCreated:{
        type: date,
        default: date.now()
    },

}, {collection: "user"});
module.exports = userSchema;