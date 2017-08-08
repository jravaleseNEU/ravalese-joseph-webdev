(function () {
    angular
        .module("WamApp")
        .service("websiteService", websiteService);

    function websiteService($http) {

        var websites = [
            {"_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem"},
            {"_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem"},
            {"_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem"},
            {"_id": "890", "name": "Go", "developerId": "123", "description": "Lorem"},
            {"_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem"},
            {"_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem"},
            {"_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem"}
        ];


        /*  var api = {
         "findWebsitesByUser": findWebsitesByUser,
         "findWebsiteById": findWebsiteById,
         "updateWebsite": updateWebsite,
         "deleteWebsite": deleteWebsite,
         "createWebsite": createWebsite
         };
         return api;
         */

        this.createWebsite = createWebsite;
        this.updateWebsite = updateWebsite;
        this.deleteWebsite = deleteWebsite;
        this.findWebsitesByUser = findWebsitesByUser;
        this.findWebsiteById = findWebsiteById;



//WORK ON THIS
        function createWebsite(userId, website) {
            var url = "/api/user/" + userId + "/website";
            return $http.post(url, website);
        }

        function updateWebsite(websiteId, website) {
            var url = "/api/website/" + websiteId;

            return $http.put(url, website);
        }

        //WORK ON THIS
        function deleteWebsite(websiteId, website, userId) {
            var url = "/api/user/" +userId+ "/website/" + websiteId;
            return $http.delete(url, website);

        }


        function findWebsitesByUser(userId) {

            var url = "/api/user/" + userId + "/website";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function findWebsiteById(userId, websiteId) {
            var url = "/api/user/" + userId + "/website/" + websiteId;
            return $http.get(url);
        }


    }
})();
