(function () {
    angular
        .module("WamApp")
        .controller("websiteNewController", websiteNewController);

    function websiteNewController($routeParams, websiteService) {
        var model = this;

        model.userId = $routeParams.userId;
        model.createWebsite = createWebsite;

        function init() {
            model.websites = websiteService.findWebsitesForUser(model.userId);
        }
        init();

        function createWebsite(websiteId,website) {
            var _website = websiteService.findWebsiteById(model.websiteId);
            if(!_website) {
                var website = websiteService.createWebsite(websiteId,website);
                $location.url("/user/:userId/website/"+website._id);
            } else {
                model.error = "website already exists";
            }
        }
    }
})();