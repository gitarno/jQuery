// JavaScript Document

var dadosDB = ["Arno","Daniel", "Samuel", "Vinicius", "Gianfranco", "Raphael"];

function criarlista($onde){
	for(i=0; i<dadosDB.length;i++){
		$($onde).append(" <li>" + dadosDB[i] + "</li>");	
	}
}

// iniciando o JQUERY...
$(function(){
	$("procergs").attr("id","menu");
	$("procergs").append("<div id='quadrado'></div>");
	$("#quadrado").css("border","#999 3px solid").append("Criamos um quadrado");
	//$("body").html("<div></div>");

	$("#quadrado").draggable({
		scrollSensitivity: 100,
		scroll: true,
		start: function(){
			$(this).css("background","#c70000");
		},
		stop:function(){
			$(this).css("background","#FFF");	
		},
		
		axis:"y"
		//containment: "parent"
		
	}).resizable({
		animate:true,
		ghost: true	
	});
	/*
	$("#ULpai").selectable({
			stop:function(){
				var result;
				$( ".ui-selected", this ).each(function() {
				  var index = $( "#ULpai li" ).index( this );
				  result += " #" + ( index + 1 ) ;
				 
				})
				alert(result);				
			}		
		});
	*/
	criarlista("#ULpai");
	$("#ULpai").sortable({
		placeholder: "sombra"	
	});
	$("#lista").accordion();
	
	$("body").append("<input type=\"text\" id=\"campo\">");
	$("#campo").autocomplete({
			source:dadosDB
		}); 
	
	$("#error").dialog({
		autoOpen:false,
		show:{
			effect:"blind", 
			duration: 1000
		},
		hide:{
			effect:"fade", 
			duration: 1000
		},
		closeText: "hide" ,
		title:false,
		draggable: false,
		modal:true,
		buttons: {
			Logar:function(){
				$(this).dialog("close");
			}
		}
	});
	
	$("#quadrado").click(function(){
		$("#error").dialog("open");
	}).html("").progressbar({
		value:37		
		});
		
	$("#menuDo").menu();	
	
	
});
