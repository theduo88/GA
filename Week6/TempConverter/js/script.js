
$(function(){

	$('#submit-btn').click(tempCalc);


	function tempCalc()	{
		event.preventDefault();

		var tempType = $('select').val();

		var temp =  parseInt($('#temp').val());


		if(tempType=='CELSIUS'){


			var newTemp = temp * 1.8 + 32;

			if(newTemp <= 50){
				
				$('body').css('background-color', 'blue')
				$('.wording').text('DUDE PUT ON A JACKET!');

			}

			else if (newTemp >=85) {

				$('body').css('background-color', 'red')
				$('.wording').text('DUDE GO TO THE POOL!');


			}

			else	{
				$('body').css('background-color', 'white')
				$('.wording').text('');

			}
			$('.converted-temp').text(newTemp + ' Fahrenheit');


		}
		else if(tempType=='FAHRENHEIT'){

			var newTemp = (temp - 32)*.5556


			if(newTemp <= 5){
				
				$('body').css('background-color', 'blue')
				$('.wording').text('DUDE PUT ON A JACKET!');

			}

			else if (newTemp >=30) {

				$('body').css('background-color', 'red')
				$('.wording').text('DUDE GO TO THE POOL!');


			}
			else	{
				$('body').css('background-color', 'white')
				$('.wording').text('');

			}

			$('.converted-temp').text(newTemp + ' Celsius');

		}



	};



});
