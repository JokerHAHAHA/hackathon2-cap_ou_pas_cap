
function homeGameCtrl($scope, $http, $cordovaGeolocation) {


	document.querySelector("#test").style.opacity = 0; // Masquer le block dont l'ID est ID au chargement de la page, en Javascript pour l'accessibilité.
	setTimeout(function(){

			document.querySelector("#test").style.opacity = 1;

		}, 1000); // Puis l'afficher au bout de cinq mille millisecondes - cinq secondes.

}