var mongoose = require("mongoose");
var websiteSchema = mongoose.Schema({

    _user: 'user._id',
    name: String,
    descripiton: String,
    pages: [pages],
    dateCreated:{
        type: date,
        default: date.now()
    },

}, {collection: "website"});
module.exports = websiteSchema;