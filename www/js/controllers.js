angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http) {

	$scope.Listado = [];

	$scope.ObtenerClima = function(y) {
		$http({
			method: "GET",
			url: "http://api.openweathermap.org/data/2.5/forecast?q="+y+",GT&APPID=f74006d77c6256a75842bc2ede1dda31"
		}).then(function Datos(variable) {
			console.log(variable)
			$scope.Listado = [];
			$scope.PaisIngresado="";
			$scope.Listado.push(variable);
		})
	}
});

