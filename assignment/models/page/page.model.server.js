var mongoose = require("mongoose");
var pageSchema = require("./page.schema.server");
var db = require("./database");
var pageModel = mongoose.model("pageModel", pageSchema);
pageModel.createPage = createPage;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;
pageModel.findPageById = findPageById;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;

module.exports = pageModel;

function createPage(websiteId, page) {

    return pageModel.create(page);
}

function updatePage(pageId, page) {

    return pageModel.update({_id: pageId},
        {$set: page});
}

function deletePage(pageId) {
    return pageModel.delete({_id: pageId});
}

function findPageById(pageId) {
    return pageModel.findById(pageId);
}
// Not Finished
function findAllPagesForWebsite(websiteId) {
    return pageModel.findById(userId)
}