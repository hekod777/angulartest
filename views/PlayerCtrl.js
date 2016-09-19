angular.module('teamPlayerApp')
	.controller('teamPlayerCtrl', function($scope, PlayerService){
		$scope.create = function(){
			PlayerService.create({name: $scope.name})
				.then (function(player){
					$scope.players.push(player);
					console.log($scope.players);
				})
				.catch(function(err){
					console.log(err);
				})
		}

		PlayerService.findAll()
			.then (function(players){
				$scope.players = players;
			})
			.catch(function(err){
				console.log(err);
			});
	})