//var app = require("../../express");
module.exports = function (app) {

    app.get("/api/page/:pageId/widget", findWidgetsByPage);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.post("/api/page/:pageId/widget", createWidget);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);

    var multer = require('multer'); // npm install multer --save
    var upload = multer({dest: './public/assignment/uploads'});

    app.post("/api/upload", upload.single('myFile'), uploadImage);

    var widgets = [
        {"_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
        {"_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        {
            "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
            "url": "http://lorempixel.com/400/200/"
        },
        {
            "_id": "456",
            "widgetType": "HTML",
            "pageId": "321",
            "text": '<p>It’s easy to feel small and insignificant in the grandiose scope of the universe, because we are. At the same time, as Carl Sagan once reminded us, we’re made of <a href="https://www.acs.org/content/acs/en/pressroom/newsreleases/2014/november/why-we-are-made-of-star-stuff-video.html" target="_blank" rel="noopener">the same “star stuff”</a> as the cosmos. All too often, we forget how random, ridiculous, and resplendent it is to part of the stellar sorority of the universe.…<span class="read-more-placeholder"></span></p>'
        },
        {"_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        {
            "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E"
        },
        {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    ];


    function createWidget(req, res) {
        var widget = req.body;
        // var userId = req.params.userId;
        // var websiteId = req.params.websiteId;

        var pageId = req.params.pageId;
        widget.pageId = pageId;
        widget._id = (new Date()).getTime() + "";
        widgets.push(widget);

        res.json(widget);
    }

    function updateWidget(req, res) {

        var widgetId = req.params.widgetId;
        var widget = req.body;

        for (var u in widgets) {
            if (widgets[u]._id === widgetId) {
                widgets[u] = widget;
                res.send(widget);
            }
        }
        res.sendStatus(404);

    }

    function deleteWidget(req, res) {

        var widgetId = req.params.widgetId;
        // var widget = req.body;

        for (var u in widgets) {
            if (widgets[u]._id === widgetId) {
                widgets.splice(u, 1);
                res.sendStatus(200)
            }
        }

    }

    function findWidgetById(req, res) {
        for (var w in widgets) {
            if (widgets[w]._id === req.params.widgetId) {
                res.json(widget[w]);
            }
        }
        res.sendStatus(404);
    }


    function findWidgetsByPage(req, res) {
        var userId = req.params.userId;
        var pageId = req.params.pageId

        var widget = [];

        for (var w in widgets) {
            if (widgets[w].pageId === pageId) {
                widget.push(widgets[w]);
            }
        }

        res.json(widget);
    }

    function uploadImage(req, res) {

        var widgetId = req.body.widgetId;
        var width = req.body.width;
        var myFile = req.file;

        var userId = req.body.userId;
        var websiteId = req.body.websiteId;
        var pageId = req.body.pageId;

        var originalname = myFile.originalname; // file name on user's computer
        var filename = myFile.filename;     // new file name in upload folder
        var path = myFile.path;         // full path of uploaded file
        var destination = myFile.destination;  // folder where file is saved to
        var size = myFile.size;
        var mimetype = myFile.mimetype;

        var widget = getWidgetById(widgetId);
        if (!widget) {
            widget = {};
            widgetId = (new Date()).getTime() + "";
            widget._id = widgetId;
            widget.pageId = pageId;
            widgets.push(widget);
        }
        widget.url = '/assignment/uploads/' + filename;


        var callbackUrl = "/assignment/#!/user/" + userId + "/" + websiteId + "/" + pageId + "/" + widgetId + "/IMAGE";

        res.redirect(callbackUrl);
    }
}

