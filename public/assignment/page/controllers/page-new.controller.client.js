(function () {
    angular
        .module("WamApp")
        .controller("pageNewController", pageNewController);

    function pageNewController($location, $routeParams, pageService) {
        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.websiteId;
        model.pageId = $routeParams.pageId;

        model.createPage = createPage;

        function init() {
            pageService
                .findPagesByWebsiteId(model.websiteId)
                .then(function (pages) {
                    model.pages = pages
                });

            /* pageService.findPageById(model.pageId)
             .then(function (response) {
             model.page = response.data
             });*/
        }

        init();

        function createPage(page) {
            pageService
                .createPage(model.websiteId, page)
                .then(function () {
                    $location.url("/user/" + model.userId + "/" + model.websiteId + "/page");
                })
        }
    }

})();