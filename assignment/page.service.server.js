var app = require("../express");

app.get ("/api/user/:userId/website/:websiteId/page", findPagesByUser);
app.get ("/api/user/:userId/website/:websiteId/page/:pageId", findPageById);
app.post("/api/user/:userId/website/:websiteId/page", createPage);

var pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
];

function createPage(req, res) {
    var page = req.body;
    var userId = req.params.userId;
    var websiteId = req.params.websiteId;
    page.websiteId = websiteId;
    page._id = (new Date()).getTime() + "";
    pages.push(page);
    res.json(page);
}

function findPageById(req, res) {
    for(var w in pages) {
        if(pages[w]._id === req.params.pageId) {
            res.json(pages[w]);
        }
    }
    res.sendStatus(404);
}

function findPagesByUser(req, res) {
    var userId = req.params.userId;

    var pagelist = [];

    for(var w in pages) {
        if(pages[w].websiteId === websiteId) {
            pagelist.push(pages[w]);
        }
    }

    res.json(pagelist);
}
