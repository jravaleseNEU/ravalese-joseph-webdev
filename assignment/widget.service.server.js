var app = require("../express");

app.get ("/api/user/:userId/website/:websiteId/page/:pageId/widget", findPagesByUser);
app.get ("/api/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId", findPageById);
app.post("/api/user/:userId/website/:websiteId/page/:pageId/widget", createPage);

model.widgets = [
    { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
        "url": "http://lorempixel.com/400/200/"},
    { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": '<p>It’s easy to feel small and insignificant in the grandiose scope of the universe, because we are. At the same time, as Carl Sagan once reminded us, we’re made of <a href="https://www.acs.org/content/acs/en/pressroom/newsreleases/2014/november/why-we-are-made-of-star-stuff-video.html" target="_blank" rel="noopener">the same “star stuff”</a> as the cosmos. All too often, we forget how random, ridiculous, and resplendent it is to part of the stellar sorority of the universe.…<span class="read-more-placeholder"></span></p>'},
    { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
        "url": "https://youtu.be/AM2Ivdi9c4E" },
    { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
];

function createWidget(req, res) {
    var widget = req.body;
    var userId = req.params.userId;
    var websiteId = req.params.websiteId;
    var pageId = req.params.pageId;
    widget.pageId = pageId;
    widget._id = (new Date()).getTime() + "";
    widgets.push(widget);
    res.json(widget);
}

function findWidgetById(req, res) {
    for(var w in widgets) {
        if(widgets[w]._id === req.params.widgetId) {
            res.json(widget[w]);
        }
    }
    res.sendStatus(404);
}

function findWidgetsByUser(req, res) {
    var userId = req.params.userId;

    var widgetlist = [];

    for(var w in widgets) {
        if(widgets[w].pageId === pageId) {
            pagelist.push(widgets[w]);
        }
    }

    res.json(widgetlist);
}