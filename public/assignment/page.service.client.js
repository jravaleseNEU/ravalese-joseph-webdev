(function () {
    angular
        .module("WamApp")
        .factory("pageService", pageService);

    function pageService() {

        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ];

        var api = {
            "findPageByWebsiteId": findPageByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage,
            "createPage": createPage
        };
        return api;

        function updatePage(websiteId, page) {
            for(var u in pages) {
                if(pages[u].websiteId === websiteId) {
                    page[u] = page;
                    return;
                }
            }
            return null;
        }
//WORK ON THIS
        function createPage(websiteId, page) {
            page._id = (new Date()).getTime() + "";
            page.websiteId = websiteId;
            pages.push(page);
            return page;
        }

        function findPageByWebsiteId(websiteId) {
            for(var u in pages) {
                if(pages[u].websiteId === websiteId) {
                    return pages[u];
                }
            }
            return null;
        }
        function findPageById(pageId) {
            for(var u in pages) {
                if(pages[u]._id === pageId {
                    return pages[u];
                }
            }
            return null;
        }


//WORK ON THIS
        function deletePage(pageId) {
            for(var u in pages) {
                var _page = page[u];
                if(_page._id === websiteId) {
                    pages.pop(page);
                }
            }
            return null;
        }

    }
})();
