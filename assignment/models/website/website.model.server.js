var mongoose = require("mongoose");
var websiteSchema = require("./website.schema.server");
var db = require("./database");
var websiteModel = mongoose.model("WebsiteModel", websiteSchema);
websiteModel.createWebsiteForUser = createWebsiteForUser;
websiteModel.updateWebsite = updateWebsite;
websitemodel.deleteWebsite = deleteWebsite;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;

module.exports = websiteModel;

function createWebsiteForUser(userId, website) {

    return websiteModel.create(website);
}

function updateWebsite(websiteId, website) {

    return websiteModel.update({_id: websiteId},
        {$set: website});
}

function deleteWebsite(websiteId) {
    return websiteModel.delete({_id: websiteId});
}

function findWebsiteById(websiteId) {
    return websiteModel.findById(websiteId);
}
 // Not Finished
function findAllWebsitesForUser(userId) {
    return websiteModel.findById(userId)
}