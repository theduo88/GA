$(function(){


	$("#entry").submit(addRow);

	function addRow(){

		event.preventDefault();

		var newEntry = $('#newEntry').val();
		var totalArray = [];
		var tab = 0;
		
		$("tbody").before('<tr><td style="visibility:hidden">0</td><td id="cost">'+formatNumber(newEntry)+'</td></tr>');

		$('#newEntry').val('');


		
		$('td').each(function() { 
			totalArray.push(parseFloat($(this).text().replace(/[^\d\.]/, ''))); 
		});


		$.each(totalArray,function() {
    		tab += this;
		});

		$('#total').text(formatNumber(tab.toString()));

	}

	function formatNumber (num) {

		if (num.indexOf(".") >= 0){
			num = '$' + num;
		}
		else if (num.indexOf(".") < 0){
			num = '$' + num + '.00'; 

		}
		return num.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    	
	}

})



// $('body').