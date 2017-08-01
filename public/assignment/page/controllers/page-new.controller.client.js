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
            pageService
                .findPagesByWebsiteId(model.websiteId)
                .then(function(pages) {
                    model.pages = pages
                });

            pageService.findPageById(model.pageId)
                .then(function(response) {
                    model.page = response.data
                });
        }
        init();

        function createPage(websiteId,page) {
            var _page = pageService.findPageById(model.pageId);
            if(!_page) {
                var page = pageService
                    .createPage(model.websiteId,model.page)
                    .then (function(){
                        $location.url("/user/:userId/website/:websiteId/page/" + page._id);
                    });
            } else {
                model.error = "page already exists";
            }
        }
    }
})();