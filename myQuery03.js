// TargetTrust
// 3º Aula

//$.noConflict();

$(function(){	
	
	$("div:first").hide();
	$("#botao").click(function(){
			$("div:first").attr("contenteditable","true").html("DIGITE");			$("div:first").toggle(1000);
			
	});		
	
	//Segundo UL... 
	$("li>ul").css("color","#c70000")
			  .hide()
			  .parent()
			  .click(function(){
	     		  $(this).children().addClass("ativo");
					$(this).children().slideToggle(1000, function(){
						$(this).removeClass("ativo");	
					});	
					$("body").animate({
						scrollTop:760}, '500',function(){
							
						});
					
			  });
	var get = $("[value='legal']").val();
	alert( get );
	
	
	//$("li").before("<li> antes </li>");
		  
	//$("div").eq(1).children().children().html("itens");
	//$("div:last>ul>li:first").hide();
	//$("li:parent").hide();

	//var array = $("div"); // variavel = jQUERY
	//array.eq(1).html("legal"); jQuery
	//array[1].innerHTML = "legal";	//JS

});
