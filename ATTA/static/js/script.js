$(function () {
	var firstName = [];
	var lastName = [];
	var email = [];
	var phone = [];
	var address = [];
	var city = [];
	var zip = [];
	var level = [];
	var fullname = [];

	event.preventDefault();

	$(':checkbox').checkboxpicker();

	$(".date-input").datepicker({
	    
	});



	$('#myModal').on('show.bs.modal', function(e) {
	    var bookId = $(e.relatedTarget).data('book-id');
	    $(e.currentTarget).find('input[name="bookId"]').val(bookId);

	    var playerOne = $(".player-one").val();
		var playerTwo = $(".player-two").val();


	});
	


	$.getJSON( "/api/members", function( data, index, element ) {
		for(var i = 0; i < data.length; i ++ ){

			firstName.push(data[i].FIRST_NAME);
			lastName.push(data[i].LAST_NAME);
			email.push(data[i].EMAIL);
			phone.push(data[i].PHONE);
			address.push(data[i].ADDRESS);
			city.push(data[i].CITY);
			zip.push(data[i].ZIP);
			level.push(data[i].LEVEL);
			fullname.push(data[i].FIRST_NAME + ' ' + data[i].LAST_NAME );
			// console.log(data[i].FIRST_NAME)
			// alert(data[i].FIRST_NAME)
			 $('table').append('<tr data-toggle="collapse" data-target="#accordion" class="clickable players"><td>'+data[i].FIRST_NAME + ' ' + data[i].LAST_NAME +'</td> <td>'+data[i].LEVEL+'</td> <td>'+data[i].EMAIL+'</td> <td>'+data[i].PHONE+'</td></tr>');
			

		}

			
		// $.each(fullname, function(index, value){
		// 	// $('.players').append('<tr><td>'+index+'</td></tr>');

		// 	// $('.table').append('<tr data-toggle=\"collapse\" data-target=\"#accordion\" class=\"clickable players\" <td>Some Stuff</td>')
		// 	// $('.table').append('<tr data-toggle="collapse" data-target="#accordion" class="clickable players"><td>rerere</td></tr>')
		// 	$('.table').prepend('<tr data-toggle="collapse" data-target="#accordion" class="clickable players"><td>'+value+'</td></tr>')


		// });

		// $('.players').append('<td>'+fullname+'<td>');
	});



	// $('.table').append('<tr data-toggle="collapse" data-target="#accordion" class="clickable players"><td>'+firstName[0] + ' ' + lastName[0] +'</td> <td>'+level[0]+'</td> <td>'+email[0]+'</td> <td>'+phone[0]+'</td></tr>');



	$( ".tags" ).autocomplete({
		source: fullname,
	});
	


});





