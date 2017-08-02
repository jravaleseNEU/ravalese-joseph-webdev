(function () {
    angular
        .module("WamApp")
        .controller("widgetEditController", widgetEditController);

    function widgetEditController($location, $routeParams, widgetService) {

        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.wid;
        model.pageId = $routeParams.pid;
        model.widgetId = $routeParams.wgid;

        model.updateWidget = updateWidget;
        model.deleteWidget = deleteWidget;


        function init() {
            widgetService
                .findWidgetsByPageId(model.widgetId)
                .then(function (response) {
                    model.widget = response.data;
                });
        }
        init();

        function deleteWidget(widgetId) {
            widgetService
                .deleteWidget(model.widgetId)
                .then(function () {
                    $location.url("/user/" + model.userId + "/" + model.websiteId + "/" + model.pageId + "/widget");
                });
        }

        function updateWidget(widgetId,widget) {
            widgetService
                .updateWidget(model.widgetId)
                .then(function () {
                    $location.url("/user/" + model.userId + "/" + model.websiteId + "/" + model.pageId + "/widget");
                });
        }
    }
})();
