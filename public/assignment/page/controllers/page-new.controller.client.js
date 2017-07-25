(function () {
    angular
        .module("WamApp")
        .controller("pageNewController", pageNewController);

    function pageNewController($routeParams, pageService) {
        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.wid;



        function init() {
            model.pages = pageService.findPagesByWebsiteId(model.websiteId);
        }
        init();
    }
})();