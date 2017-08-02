(function () {
    angular
        .module("WamApp")
        .service("pageService", pageService);

    function pageService($http) {

        var pages = [
            {"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
            {"_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem"},
            {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"}
        ];

        /*var api = {
         "findPagesByWebsiteId": findPagesByWebsiteId,
         "findPageById": findPageById,
         "updatePage": updatePage,
         "deletePage": deletePage,
         "createPage": createPage
         };
         return api;*/

        this.createPage = createPage;
        this.updatePage = updatePage;
        this.deletePage = deletePage;
        this.findPagesByWebsiteId = findPagesByWebsiteId;
        this.findPageById = findPageById;


//WORK ON THIS
        function createPage(websiteId, page) {
            var url = "/api/website/" + websiteId + "/page";

            return $http.post(url, page);
        }

        function updatePage(websiteId, page) {
            var url = "/api/page/" + pageId;

            return $http.put(url, page);
        }

        //WORK ON THIS
        function deletePage(pageId) {

            var url = "/api/page/" + pageId;
            return $http.delete(url);
        }

    }

    function findPagesByWebsiteId(websiteId) {
        var url = "/api/website/" + websiteId + "/page";
        return $http.get(url)
            .then(function (response) {
                return response.data;
            });
    }

    function findPageById(pageId) {
        var url = "/api/page/" + pageId;
        return $http.get(url);
    }


})();
