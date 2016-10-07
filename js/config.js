titulo= "Los cuidados de Rafles ";

// Español // Matemáticas 
  
materia= "Matemáticas";  

grado = 4; // 
bloque= 5; // el que corresponda según el bloque al que pertenezca el recurso

// texto de introducción
intro= 'Rafles tuvo su primer consulta con el veterinario. Al salir, hay una serie de recomendacioens que nuestros amigos deben seguir.';
instrucciones = 'Pulsa las imágenes que destaca. Al terminar, avanza a la siguiente pantalla. ';


//////////////////////////////////////////////////////

$(window).load(function(){ 
	$( "#Area_splash" ).fadeIn( 3500, function() {
	$( "#txt_InstIndex" ).fadeIn( 100 );	
	});
})

$(document).ready(function () {
	
	$('#Encabezado').html(titulo);
	$('#txt_Inst').html(instrucciones);
	$('#txt_InstIndex').css("display","none");
	$('#txt_InstIndex').html(intro);	
	$('title').html(materia);
	
	$( "#seccion2" ).hide();
	//$( "#seccion1" ).hide();
	
	$(".area_video").append('<video id="videoInterac"><source src="video/video.mp4" type="video/mp4"/></video></div><div id="botonera"><div id="controles"><a href="index.html"><div id="homeBtn" style="left:-100px;"></div></a><div id="btnPause"></div><div id="btnPlay"></div><div id="btnStop"></div><div id="btnVolumeLow"></div><div id="btnVolumeLoud"></div><div id="barra"></div></div></div>');

}) //cierra function




