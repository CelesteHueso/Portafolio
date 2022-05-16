$(function (){ //$(document).ready(function () {});
//Código jQuery
	console.log('llega aqui');
	$('#nav-icon3').click(function (){
		// Sentencias que se ejecutan al hacer click sobre el ícono
		$('#menuP ul').toggleClass('abierto');// como el toggleClass ya indica que es una clase no hace falta poner un punto
		$('#nav-icon3').toggleClass('open'); //esta función 
	});
	//$('#menuP a').click(function(){ //con esta acción hacemos que se cierre el menú al cliclar en un <a>
	//	$('#menuP ul').removeClass('abierto');});

	
});
