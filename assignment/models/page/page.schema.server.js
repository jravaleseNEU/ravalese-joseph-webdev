var mongoose = require("mongoose");
var pageSchema = mongoose.Schema({

    _website: 'website._id',
    name: String,
    title: String,
    description: String,
    widgets: [widgets],
    dateCreated:{
        type: date,
        default: date.now()
    },

}, {collection: "page"});
module.exports = pageSchema;