// Meu AJAX

$(function(){
	$('body').append("<div id='conteudo'> </div><button id='carregar'> carregar </button>");

	$("#carregar").click(function(){
		$("#conteudo").load("conteudo.txt h2",function(a,b,c){
			alert(a);//responseTxt	
			alert(b);//StatusTXT	
			alert(c);//XMLHtmlRequest				
		});	
	});


		
});