define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title:'Home', moduleId: 'viewmodels/home',nav:true },
                { route:'apply',moduleId:'viewmodels/apply',nav:true},
                { route: 'about', moduleId: 'viewmodels/about', nav:true},
                { route: 'advertising',moduleId:'viewmodels/advertising',nav:true},
                { route: 'contact', moduleId:'viewmodels/contact',nav:true},
                { route: 'magazine',moduleId:'viewmodels/magazine',nav:true}

            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});