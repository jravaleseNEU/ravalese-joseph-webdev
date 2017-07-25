(function () {
    angular
        .module("WamApp")
        .controller("pageListController", pageListController);

    function pageListController($routeParams, pageService) {
        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.wid;
        model.widgetId = $routeParams.wgid;



        function init() {
            model.widgets = widgetService.findWidgetsByPageId(model.widgetId);
        }
        init();
    }
})();
