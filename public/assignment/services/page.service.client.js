(function () {
    angular
        .module("WamApp")
        .service("pageService", pageService);

    function pageService($http) {

        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ];

        var api = {
            "findPagesByWebsiteId": findPagesByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage,
            "createPage": createPage
        };
        return api;

        function updatePage(websiteId, page) {
            var url = "/api/page/" + pageId;

            return $http.put(url, website);
        }
//WORK ON THIS
        function createPage(websiteId, page) {
            var url = "/api/website/" + websiteId + "/page";

            return $http.post(url, page);
        }

        function findPagesByWebsiteId(websiteId) {

            return $http.get("/api/website/" + websiteId + "/page");
        }

        function findPageById(pageId) {
            return $http.get("/api/page/" + pageId);
        }


//WORK ON THIS
        function deletePage(pageId,page) {

            var url = "/api/page/" + pageId;
            return $http.delete(url,page);
        }

    }
})();
