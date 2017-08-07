var mongoose = require("mongoose");
var websiteSchema = mongoose.Schema({

    _user: {type: mongoose.Schema.Types.ObjectId, ref:"UserModel"},
    name: String,
    descripiton: String,
    pages: [pages],
    dateCreated:{
        type: Date,
        default: Date.now()
    },

}, {collection: "website"});
module.exports = websiteSchema;