(function () {
    angular
        .module("WamApp")
        .service("pageService", pageService);

    function pageService() {

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

        function findPagesByWebsiteId(websiteId) {
            var pagelist= [];

            for(var u in pages) {
                if(pages[u].websiteId === websiteId) {
                    pagelist.push(pages[u]);
                }
            }
            return pagelist;
        }

        function findPageById(pageId) {
            for(var u in pages) {
                if(pages[u]._id === pageId) {
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
