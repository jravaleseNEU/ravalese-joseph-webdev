var mongoose = require("mongoose");
var pageSchema = require("./page.schema.server");
var db = require("../model.server");
var pageModel = mongoose.model("pageModel", pageSchema);
var websiteModel = require("../website/website.model.server.js");

pageModel.createPage = createPage;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;
pageModel.findPageById = findPageById;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.addWidget = addWidget;
pageModel.deleteWidget = deleteWidget;


module.exports = pageModel;

function createPage(websiteId, page) {

    page._website = websiteId;
    return pageModel
        .create(page)
        .then(function (page) {
            return websiteModel
                .addPage(websiteId, page._id);
        });
}

function updatePage(pageId, page) {

    return pageModel.update({_id: pageId},
        {$set: page});
}

function deletePage(websiteId, pageId) {
    return pageModel
        .remove({_id: pageId})
        .then(function (status) {
            return websiteModel
                .deletePage(websiteId, pageId);
        })
}

function findPageById(pageId) {
    return pageModel.findById(pageId);
}
// Not Finished
function findAllPagesForWebsite(websiteId) {
    return pageModel.find({_website: websiteId})
        .populate('_website', 'name')
        .exec();
}

function addWidget(widgetId, pageId) {
    return pageModel
        .findPageById(pageId)
        .then(function (page) {
            page.widgets.push(widgetId);
            return page.save();
        });

}


function deleteWidget(widgetId, pageId) {
    return pageModel
        .findPageById(pageId)
        .then(function (page) {
            var index = page.widgets.indexOf(widgetId);
            page.widgets.splice(index, 1);
            return page.save();
        });

}