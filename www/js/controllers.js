angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http) {

	$scope.ObtenerClima = function(y) {
		$http({
			method: "GET",
			url: "http://api.openweathermap.org/data/2.5/forecast?q="+y+",GT&APPID=f74006d77c6256a75842bc2ede1dda31"
		}).then(function Datos(x) {
			console.log(x)
		})
	}
})

.controller('ChatsCtrl', function($scope, Chats) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	$scope.chats = Chats.all();
	$scope.remove = function(chat) {
		Chats.remove(chat);
	};
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
	$scope.settings = {
		enableFriends: true
	};
});
