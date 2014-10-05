
app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/login');

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: './partial/login.html',
      controller: 'MapNoteController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: './partial/signup.html',
      controller: 'MapNoteController'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: './partial/dashboard.html',
      controller: 'MapNoteController'
    });

});
