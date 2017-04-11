/**
 * Created by ulhaq on 4/3/2017.
 */

'use strict';

var app = angular.module(appResources.options.appName, allPreSources);

app.config(function ($routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            controller: 'homeCtrl',
            templateUrl: '/assets/templates/basic.html',
            controllerAs: 'ctrl'
        })
        .when('/about', {
            title: 'About',
            controller: 'aboutCtrl',
            templateUrl: '/assets/templates/basic.html',
            controllerAs: 'ctrl'
        });

    $routeProvider.otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
});

app.run(['$rootScope', function($rootScope) {

    $rootScope.appName = appResources.options.appName;

    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        var title = appResources.options.appName;

        if ( typeof current.$$route.title != "undefined" && current.$$route.title!=='')
            title = title + ' - '+current.$$route.title;

        $rootScope.title = title;
    });

}]);