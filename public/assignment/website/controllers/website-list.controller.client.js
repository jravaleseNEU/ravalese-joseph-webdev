(function () {
    angular
        .module("WamApp")
        .controller("websiteListController", websiteListController);

    function websiteListController($routeParams, websiteService) {
        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.wid;


        function init() {
            model.websites = websiteService.findWebsitesByUser(model.userId);
        }
        init();
    }
})();