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
            "findWidgetsByPage": findWidgetsByPage,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget,
            "createWidget": createWidget
        };
        return api;

        function updateWidget(widgetId, widget) {

            var url = "/api/widget/" + widgetId;

            return $http.put(url, website);
        }
//WORK ON THIS
        function createWidget(pageId, widget) {
            var url = "/api/page/" + pageId + "/widget";

            return $http.post(url, page);
        }

        function findWidgetsByPage(pageId) {

            return $http.get("/api/user/" + userId + "/website" + websiteId + "/page/" + pageId + "/widget/");
        }

        function findWidgetById(widgetId) {

            return $http.get("/api/widget/" + widgetId);
        }


//WORK ON THIS
        function deleteWidget(widgetId,widget) {

            var url = "/api/user/" + userId + "/website" + websiteId + "/page/" + pageId + "/widget/" + widgetId;
            return $http.delete(url, widget);
        }

    }
})();
