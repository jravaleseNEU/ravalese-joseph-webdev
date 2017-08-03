var app = require("../../express");

// http handlers

app.get   ("/api/website/:websiteId/page", findPagesByWebsiteId);
app.get   ("/api/page/:pageId", findPageById);
app.post  ("/api/website/:websiteId/page",createPage);
app.put   ("/api/page/:pageId", updatePage);
app.delete("/api/page/:pageId", deletePage);

var pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
];

function createPage(req, res) {
    var page = req.body;
    //var userId = req.params.userId;
    var websiteId = req.params.websiteId;

    page.websiteId = websiteId;
    page._id = (new Date()).getTime() + "";
    pages.push(page);
    res.json(page);
}

function updatePage(req, res) {

    var pageId = req.params.pageId;
    var page = req.body;

    for (var u in pages) {
        if (pages[u]._id === pageId) {
            pages[u] = page;
            res.send(page);
        }
    }
    res.sendStatus(404);

}

function deletePage(req, res) {

    var pageId = req.params.pageId;
    var page = req.body;

    for(var u in pages) {
        if(pages[u]._id === pageId) {
            pages.splice(u,1);
        }
    }


}


function findPageById(req, res) {
    for(var w in pages) {
        if(pages[w]._id === req.params.pageId) {
            res.json(pages[w]);
        }
    }
    res.sendStatus(404);
}

function findPagesByWebsiteId(req, res) {
    var userId = req.params.userId;
    var websiteId = req.params.websiteId;

    var page = [];

    for(var w in pages) {
        if(pages[w].websiteId === websiteId) {
            page.push(pages[w]);
        }
    }

    res.json(page);
}


