(function () {
    angular
        .module("WamApp")
        .controller("pageNewController", pageNewController);

    function pageNewController($routeParams, pageService) {
        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.wid;
        model.pageId = $routeParams.pid;



        function init() {
            model.pages = pageService.findPagesByWebsiteId(model.websiteId);
            model.page = pageService.findPageById(model.pageId);
        }
        init();

        function createPage(websiteId,page) {
            var _page = pageService.findPageById(model.pageId);
            if(!_page) {
                var page = pageService.createPage(websiteId,model.page);
                $location.url("/user/:userId/website/:websiteId/page/" + page._id);
            } else {
                model.error = "page already exists";
            }
        }
    }
})();