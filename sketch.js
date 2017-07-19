var div = $("<div></div>");
var gridsize = 32;

function main(){
	var sketchsize = 960/gridsize;
  $(".sketch").css("width", sketchsize+"px");
  $(".sketch").css("height", sketchsize+"px");
  for(var i=0; i<(Math.pow(gridsize, 2)); i++){
  		div = $("<div id="+i+" class= 'sketch'></div")
      $(".wrapper").append(div);
  }
  $(".sketch").hover(function(){
    $(this).css("background-color", "black");
    }, function(){
    //$(this).css("background-color", "black");
});
	$(".clear").click(function(){
  	$(".sketch").css("background-color", "white");
  });
}

$(document).ready(main);
