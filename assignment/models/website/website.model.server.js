var mongoose = require("mongoose");
var websiteSchema = require("./website.schema.server");
var db = require("./database");
var websiteModel = mongoose.model("WebsiteModel", websiteSchema);

websiteModel.createWebsiteForUser = createWebsiteForUser;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.addPage = addPage;
websiteModel.removePage = removePage;


var userModel = require ("../user/user.model.server");
module.exports = websiteModel;

function createWebsiteForUser(userId, website) {
    website._user = userId;
    var websiteTmp = null;
    return websiteModel
        .create(website)
        .then(function (websiteDoc) {
            websiteTmp = websiteDoc;
           return userModel.addWebsite(userId,websiteDoc)
        })
        .then(function (userDoc) {
            return websiteTmp
        })
    }

function updateWebsite(websiteId, website) {

    return websiteModel.update({_id: websiteId},
        {$set: website});
}

function deleteWebsite(websiteId, userId) {
    return websiteModel
        .remove({_id: websiteId})
        .then(function (status) {
            userModel.deleteWebsite(userId, websiteId)
        })
}

function findWebsiteById(websiteId) {
    return websiteModel.findById(websiteId);
}


function findAllWebsitesForUser(userId) {
    return websiteModel
        .find({_user: userId})
        .populate('_user', 'username')
        .exec();
}

function addPage(websiteId, pageId) {
    return websiteModel
        .findWebsiteById(websiteId)
        .then(function (website) {

            website.pages.push(pageId);
            return website.save();
        })
    
}


function removePage(websiteId, pageId) {
    return websiteModel
        .findWebsiteById(websiteId)
        .then(function (website) {
            var index = website.pages.indexOf(pageId);
            website.pages.splice(index, 1);
            return website.save();
        })
    
}