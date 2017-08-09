(function () {
    angular
        .module("WamApp")
        .controller("widgetNewController", widgetNewController);

    function widgetNewController($location, $routeParams, widgetService) {

        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.websiteId;
        model.pageId = $routeParams.pageId;
        model.widgetId = $routeParams.widgetId;

        model.createWidget = createWidget;


        function init() {

        }
        init();

        function createWidget(widget) {
            widgetService
                .createWidget(model.pageId, widget)
                .then(function () {
                    $location.url("/user/"+model.userId+"/"+model.websiteId+"/"+model.pageId+"/widget");
                })
        }

    }
})();
