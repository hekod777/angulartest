angular.module('teamPlayerApp',['ui.router']);

angular.module('teamPlayerApp')
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			// .state('home',{
			// 	url: '/',
			// 	templateUrl:'/index.html'
			// })
			.state('player',{
				url:'/player',
				templateUrl:'player.html',
				//template:'<p>mimiqq</p>',
				//controller: 'playerCtrl',
			})
			// .state('team'),{
			// 	url:'/team',
			// 	templateUrl:'/team.html',
			// 	controller:'teamCtrl',
			// };
			.state('test',{
				url:'/test',
				template:'<p>aassss</p>',
			})

		$urlRouterProvider.otherwise('/');

	})