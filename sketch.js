var div = $("<div></div");

function main(){
	//createGrid(16);
  $(".clear").click(function(){
  	$(".sketch").css("background-color", "#E8E8E8");
  });
  $(".reset").click(function(){
  	$(".sketch").css("background-color", "#E8E8E8");
    var newsize = parseInt(prompt("Enter size of grid: ", "32"));
    createGrid(newsize);
    main();
  });
  $(".sketch").hover(function(){
    $(this).css("background-color", "black");
    }, function(){
    //$(this).css("background-color", "black");
	});
}

function createGrid(size){
	$(".wrapper").empty();
  var sketchsize = 640/size;
  for(var i=0; i<(Math.pow(size, 2)); i++){
  		div = $("<div id="+i+" class= 'sketch'></div");
      $(".wrapper").append(div);
  }
  $(".sketch").css("width", sketchsize);
  $(".sketch").css("height", sketchsize);
}

$(document).ready(function(){
	createGrid(16);
  main();
});
