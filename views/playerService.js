angular.module('teamPlayerApp')
	.factory('PlayerService', function($http){
		var playerObj = {};
		playerObj.create =  function(player){
			return $http.post('/api/player', player)
				.then (function(result){
					return result.data;
				});
		}
		playerObj.findAll = function(){
			return $http.get('/api/player')
				.then(function(result){
					return result.data;
				})
		}

		return playerObj;
		
	})