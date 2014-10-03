
app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/login');

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: './public/partial/login.html',
      controller: 'MapNoteController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: './public/partial/signup.html',
      controller: 'MapNoteController'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: './public/partial/dashboard.html',
      controller: 'MapNoteController'
    });

});
