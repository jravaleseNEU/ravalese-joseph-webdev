(function () {
    angular
        .module("WamApp")
        .controller("websiteEditController", websiteEditController);

    function websiteEditController($routeParams, websiteService) {
        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.wid;
        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;

        function init() {
            websiteService
                .findWebsitesByUser(model.userId)
                .then(function (websites) {
                    model.websites = websites
                });

            websiteService
                .findWebsiteById(model.websiteId)
                .then(function (response) {
                    model.site = response.data;
                });
        }

        init();

        function deleteWebsite(websiteId, website) {
            websiteService
                .deleteWebsite(model.websiteId)
                .then(function () {
                    $location.url('/user/' + model.userId + '/website');
                })
        }

        function updateWebsite(websiteId, website) {
            websiteService
                .updateWebsite(model.websiteId, website)
                .then(function () {
                    $location.url('/user/' + model.userId + '/website');
                })
        }
    }
})();
