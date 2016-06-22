angular.module('videogames.controllers', [])

.controller('listController', function($location, $games){
	var list = this;

	$games.list().then(function(games){
		list.games = games;
	}, function(error){
		console.log(error);
		alert(error.message);
	});
});