$(function() {

	var cities = {
  					"nyc": "New York City",
  					"sf": "San Francisco",
  					"la": "Los Angeles",
					"austin": "Austin",
					"sydney": "Sydney"
				};

	$.each(cities, function(key, value){

		var option = $("<option></option>").text(value); 

        $('#city-type').append($(option).attr('value',key).html(value));

	});

	$('#city-type').change(backgroundImg);

	function backgroundImg(value){
		$('body').attr('class',this.value)

	};
});