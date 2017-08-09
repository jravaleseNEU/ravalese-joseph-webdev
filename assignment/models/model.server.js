var q = require('q');

var connectionString = 'mongodb://127.0.0.1:27017/webdev-northeastern'; // for local
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
    var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds149412.mlab.com:49412/heroku_v8wqrl6w'; // user yours
}

var mongoose = require("mongoose");
var db = mongoose.connect(connectionString);
mongoose.Promise = q.Promise;
module.exports = db;