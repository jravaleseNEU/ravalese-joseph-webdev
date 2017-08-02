(function () {

    angular
        .module("WamApp")
        .config(configuration);

    function configuration($routeProvider, $httpProvider) {
        $routeProvider;

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
        $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
        $httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';

        $routeProvider
            .when("/", {
                templateUrl: "user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })
            .when("/login", {
                templateUrl: "user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })

            .when("/register", {
                templateUrl: "user/templates/register.view.client.html",
                controller: "registerController",
                controllerAs: "model"
            })

            .when("/profile/:userId", {
                templateUrl: "user/templates/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model"
            })



            // website routes


            .when("/user/:userId/website", {
                templateUrl: "website/templates/website-list.view.client.html",
                controller: "websiteListController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/new", {
                templateUrl: "website/templates/website-new.view.client.html",
                controller: "websiteNewController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId", {
                templateUrl: "website/templates/website-edit.view.client.html",
                controller: "websiteEditController",
                controllerAs: "model"
            })


            //Page Routes


            .when("/user/:userId/website/:websiteId/page", {
                templateUrl: "page/templates/page-list.view.client.html",
                controller: "pageListController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId/page/new", {
                templateUrl: "page/templates/page-new.view.client.html",
                controller: "pageNewController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId/page/:pageId", {
                templateUrl: "page/templates/page-edit.view.client.html",
                controller: "pageEditController",
                controllerAs: "model"
            })

            //Widget Routes


            .when("/user/:userId/website/:websiteId/page/:pageId/widget", {
                templateUrl: "widget/templates/widget-list.view.client.html",
                controller: "widgetListController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId/page/:pageId/widget/new", {
                templateUrl: "widget/templates/widget-choose.view.client.html",
                controller: "widgetNewController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId/page/:pageId/widget/new/:widgetId", {
                templateUrl: "widget/templates/widget-edit.view.client.html",
                controller: "widgetEditController",
                controllerAs: "model"
            })


    }
})();