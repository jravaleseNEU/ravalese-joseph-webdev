var app = require("../../express");

var websiteModel = require("../models/website/website.model.server");
var userModel = require("../models/user/user.model.server");

// http handlers

app.get   ("/api/user/:userId/website", findWebsitesByUser);
app.get   ("/api/user/:userId/website/:websiteId", findWebsiteById);
app.post  ("/api/user/:userId/website", createWebsite);
app.put   ("/api/website/:websiteId", updateWebsite);
app.delete("/api/user/:userId/website/:websiteId", deleteWebsite);



var websites = [
    { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
];

function createWebsite(req, res) {
    var website = req.body;
    var userId = req.params.userId;

    websiteModel
        .createWebsiteForUser(userId, website)
        .then(function (websiteDoc) {
            res.json(websiteDoc);
        }, function (err) {
            res.statusCode(500).send(err);
        })
    // website.developerId = userId;
    // website._id = (new Date()).getTime() + "";
    // websites.push(website);
    // res.json(website);
}

function findWebsiteById(req, res) {

    websiteModel
        .findWebsiteById(req.params.websiteId)
        .then(function (website) {
            res.json(website);
        })


    // for(var w in websites) {
    //     if(websites[w]._id === req.params.websiteId) {
    //         res.json(websites[w]);
    //     }
    // }
    // res.sendStatus(404);
}

function findWebsitesByUser(req, res) {
    var userId = req.params.userId;

    websiteModel
        .findAllWebsitesForUser(userId)
        .then(function (websites) {

        })

    // var sites = [];
    //
    // for(var w in websites) {
    //     if(websites[w].developerId === userId) {
    //         sites.push(websites[w]);
    //     }
    // }
    //
    // res.json(sites);
}


function updateWebsite(req,res) {
    var websiteId = req.params.websiteId;
    var website = req.body;

    websiteModel
        .updateWebsite(websiteId, website)
        .then(function (website) {
            res.json(website);
        })

    // for (var u in websites) {
    //     if (websites[u]._id === websiteId) {
    //         websites[u] = website;
    //         res.send(website)
    //     }
    // }
    // res.sendStatus(404);

}

function deleteWebsite(req, res) {
    var websiteId = req.params.websiteId;
    var userId = req.params.userId;

    websiteModel
        .deleteWebsite(userId, websiteId)
        .then(function (status) {
            res.json(status);
        });
    //var website = req.body;
    // for(var u in websites) {
    //     var _website = websites[u];
    //     if(_website._id === websiteId) {
    //         websites.splice(u,1);
    //         res.sendStatus(200);
    //     }
    // }

}
