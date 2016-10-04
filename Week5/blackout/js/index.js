$(function(){


	$('#light_switch').click(dark);


	function dark(){
		//check if body has the class dark already and put it in a boolean var
		var a = $( "body" ).hasClass( "dark" )

		//if boolean a is true
		if(a){
			$( "body" ).removeClass( "dark" );
		}
		//anything else
		else{
			$( "body" ).addClass( "dark" );
		}

	}

})