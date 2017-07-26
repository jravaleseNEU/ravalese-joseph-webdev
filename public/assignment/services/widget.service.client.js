(function () {
    angular
        .module("WamApp")
        .factory("widgetService", widgetService);

    function widgetService() {

        var widgets = [
            { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];

        var api = {
            "findWidgetByPageId": findWidgetByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget,
            "createWidget": createWidget
        };
        return api;

        function updateWidget(widgetId, widget) {
            for(var u in widgets) {
                if(widgets[u]._id === widgetId) {
                    widget[u] = widget;
                    return;
                }
            }
            return null;
        }
//WORK ON THIS
        function createWidget(pageId, widget) {
            widget._id = (new Date()).getTime() + "";
            widget.pageId = pageId;
            widgets.push(widget);
            return widget;
        }

        function findWidgetByPageId(pageId) {
            for(var u in widgets) {
                if(widgets[u].pageId === pageId) {
                    return widgets[u];
                }
            }
            return null;
        }
        function findWidgetById(widgetId) {
            for(var u in widgets) {
                if(widgets[u]._id === widgetId) {
                    return widgets[u];
                }
            }
            return null;
        }


//WORK ON THIS
        function deleteWidget(widgetId) {
            for(var u in widgets) {
                var _widget = widget[u];
                if(_widget._id === widgetId) {
                    widgets.pop(widget);
                }
            }
            return null;
        }

    }
})();
