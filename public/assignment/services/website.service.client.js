(function () {
    angular
        .module("WamApp")
        .service("websiteService", websiteService);

    function websiteService() {

        var websites = [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        ];

        var api = {
            "findWebsitesByUser": findWebsitesByUser,
            "findWebsiteById": findWebsiteById,
            "updateWebsite": updateWebsite,
            "deleteWebsite": deleteWebsite,
            "createWebsite": createWebsite
        };
        return api;


        function updateWebsite(websiteId, website) {
            for(var u in websites) {
                if(websites[u]._id === websiteId) {
                    website[u] = wesbsite;
                    return;
                }
            }
            return null;
        }

//WORK ON THIS
        function createWebsite(userId, website) {
            website._id = (new Date()).getTime() + "";
            website.developerId = userId;
            websites.push(website);
            return website;
        }

        function findWebsitesByUser(userId) {
            var sites = [];
            for(var w in websites) {
                if(websites[w].developerId === userId) {
                    sites.push(websites[w]);
                }
            }
            return sites;
        }

        function findWebsiteById(userId) {
            for(var u in websites) {
                if(websites[u]._id === websiteId) {
                    return websites[u];
                }
            }
            return null;
        }


//WORK ON THIS
        function deleteWebsite(websiteId) {
            for(var u in websites) {
                var _website =website[u];
                if(_website._id === websiteId) {
                    websites.pop(website);
                }
            }
            return null;
        }

    }
})();