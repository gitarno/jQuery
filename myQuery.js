// TargetTrust

var dadosDB = ["Arno","Daniel", "Samuel", "Vinicius", "Gianfranco"];
function legal(){
	for(i=0; i<dadosDB.length;i++){
		document.body.innerHTML += " <p>" + dadosDB[i] + "</p>";	
	}
}

$(function(){
	legal();
	$("p").css("margin",2).css("padding",2);
	$("p:even").css("background","#CCC");	
	$("p:odd").css("background","#EEE");	
	$("p").click(
		function(){
			$(this).hide(1000);
		}
	);
	$("p:first").click(
		function(){
			$("p").show(1000);
		}
	);	
	var lista = document.createElement("ul");
	for(i=0;i<dadosDB.length;i++){ 
		var itens = document.createElement("li");
		var urls = document.createElement("a");
		urls.innerHTML = dadosDB[i];
		itens.appendChild(urls);
		lista.appendChild(itens);
	
	};
	document.body.appendChild(lista);		
	
	
	$("ul").attr("id","listagem");
	$("#listagem li").addClass("alunos").find("a").each(function(){
		$(this).attr("href","/"+$(this).text());        
    });
});
