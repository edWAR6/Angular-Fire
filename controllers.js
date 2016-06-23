angular.module('videogames.controllers', [])

.controller('listController', function($location, $games){
	var list = this;

	$games.list().then(function(games){
		list.games = games;
	}, function(error){
		console.log(error);
		alert(error.message);
	});

	list.add = function(){
		$games.add(list.game).then(function(){
			alert('Success!');
		}, function(error){
			alert('Error');
			console.log(error);
		});
	};
});