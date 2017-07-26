(function () {
    angular
        .module("WamApp")
        .controller("widgetEditController", widgetEditController);

    function widgetEditController($routeParams, widgetService) {
        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.wid;
        model.pageId = $routeParams.pid;
        model.widgetId = $routeParams.wgid;



        function init() {
            model.widgets = widgetService.findWidgetsByPageId(model.widgetId);
        }
        init();

        function deleteWidget(widgetId) {
            widgetService.deleteWidget(widgetId)
        }

        function updateWidget(widgetId) {
            widgetService.updateWidget(widgetId)
        }
    }
})();
