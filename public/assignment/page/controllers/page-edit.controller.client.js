(function () {
    angular
        .module("WamApp")
        .controller("pageEditController", pageEditController);

    function pageEditController($location, $routeParams, pageService) {
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

        function deletePage(pageId) {
            pageService
                .deletePage(pageId)
                .then(function() {
                    $location.url("/user/" + model.userId + "/" + model.websiteId + "/page");
                });
        }

        function updatePage(pageId,page) {
            pageService
                .updatePage(model.websiteId, page)
                .then(function () {
                    $location.url("/user/" + model.userId + "/" + model.websiteId + "/page");
                });
        }
    }
})();