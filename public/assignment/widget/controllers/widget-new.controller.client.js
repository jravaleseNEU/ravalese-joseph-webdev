(function () {
    angular
        .module("WamApp")
        .controller("widgetNewController", widgetNewController);

    function widgetNewController($routeParams, widgetService) {
        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.wid;
        model.pageId = $routeParams.pid;
        model.widgetId = $routeParams.wgid;



        function init() {
            model.widgets = widgetService.findWidgetsByPageId(model.widgetId);
            model.widget = widgetService.findWidgetById(model.widgetId);
        }
        init();

        function createWidget(pageId,widget) {
            widgetService.createWidget(widgetId)
        }

        function updateWidget(widgetId) {
            widgetService.updateWidget(widgetId)
        }
    }
})();
