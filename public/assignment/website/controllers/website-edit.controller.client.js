(function () {
    angular
        .module("WamApp")
        .controller("websiteEditController", websiteEditController);

    function websiteEditController($location, $routeParams, websiteService) {
        var model = this;

        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.websiteId;
        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;

        function init() {
            websiteService
                .findWebsitesByUser(model.userId)
                .then(function (websites) {
                    model.websites = websites
                });

            websiteService
                .findWebsiteById(model.userId, model.websiteId)
                .then(function (response) {
                    model.website = response.data;
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
