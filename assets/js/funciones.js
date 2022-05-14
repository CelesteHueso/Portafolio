$(function (){ //$(document).ready(function () {});
//Código jQuery
	console.log('llega aqui');
	$('#menuPrincipalIcono').click(function (){
		// Sentencias que se ejecutan al hacer click sobre el ícono
		$('#tucola ul').toggleClass('abierto');// como el toggleClass ya indica que es una clase no hace falta poner un punto
	});
	$('#tucola a').click(function(){ //con esta acción hacemos que se cierre el menú al cliclar en un <a>
		$('#tucola ul').removeClass('abierto');

	});
});
