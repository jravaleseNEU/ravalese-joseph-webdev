(function () {
    angular
        .module("WamApp")
        .factory("WidgetService", WidgetService);

    function WidgetService() {

        var Widgets = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ];

        var api = {
            "findWidgetByWebsiteId": findWidgetByWebsiteId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget,
            "createWidget": createWidget
        };
        return api;

        function updateWidget(websiteId, Widget) {
            for(var u in Widgets) {
                if(Widgets[u].websiteId === websiteId) {
                    Widget[u] = Widget;
                    return;
                }
            }
            return null;
        }
//WORK ON THIS
        function createWidget(websiteId, Widget) {
            Widget._id = (new Date()).getTime() + "";
            Widget.websiteId = websiteId;
            Widgets.push(Widget);
            return Widget;
        }

        function findWidgetByWebsiteId(websiteId) {
            for(var u in Widgets) {
                if(Widgets[u].websiteId === websiteId) {
                    return Widgets[u];
                }
            }
            return null;
        }
        function findWidgetById(WidgetId) {
            for(var u in Widgets) {
                if(Widgets[u]._id === WidgetId {
                    return Widgets[u];
                }
            }
            return null;
        }


//WORK ON THIS
        function deleteWidget(WidgetId) {
            for(var u in Widgets) {
                var _Widget = Widget[u];
                if(_Widget._id === websiteId) {
                    Widgets.pop(Widget);
                }
            }
            return null;
        }

    }
})();
