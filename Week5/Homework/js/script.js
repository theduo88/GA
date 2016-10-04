//this is for js to be ready
$(function(){


	//click the submit button and this will all the city function
	$('#submit-btn').click(background);

	//hit enter on the city type and this will also call the city function
	$('#city-type').submit(background);

	//determine what to change the background pic to
	function background()	{

		//Prevent a form submission
		event.preventDefault();

		//defining city variable
		//also want to trim all the leadying spaces
		//also want to make sure that this works for upper and lower cases
		var city = $('#city-type').val().trim().toLowerCase();

		if(city=='nyc' || city=='new york'){
			//first remove all classes in body and then add new class
			$( "body" ).removeClass().addClass( "nyc" );
		}

		else if(city=='sf' || city=='san francisco' || city=='bay area'){
			//first remove all classes in body and then add new class
			$( "body" ).removeClass().addClass( "sf" );
		}

		else if(city=='la' || city=='los angeles' || city=='lax'){
			//first remove all classes in body and then add new class
			$( "body" ).removeClass().addClass( "la" );
		}

		else if(city=='atx' || city=='austin'){
			//first remove all classes in body and then add new class
			$( "body" ).removeClass().addClass( "austin" );
		}

		else if(city=='syd' || city=='sydney'){
			//first remove all classes in body and then add new class
			$( "body" ).removeClass().addClass( "sydney" );
		}
		else{
			//if nothing matches, go back to the default image
			$( "body" ).removeClass();
		}
	}

})