function shrink() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$(document).on("scroll",function(){
	if($(document).scrollTop()>116){ 
		$("header").removeClass("large").addClass("small");
		}
	else{
		$("header").removeClass("small").addClass("large");
		}

});


$(document).on("scroll",function(){

	if($(document).scrollTop()<300){ 
		$("section.yellow").removeClass("slarge").addClass("ssmall");
		$("button").removeClass("slarge").addClass("ssmall");
		}
	else{
		$("section.yellow").removeClass("ssmall").addClass("slarge");
		$("button").removeClass("ssmall").addClass("slarge");
		}

});
