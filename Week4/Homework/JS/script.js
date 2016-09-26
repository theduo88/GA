$(function() {
    console.log( "ready!" );




	$( ".readmore" ).click(function(event) {
	  $( "#show-this-on-click" ).show( "slow", function() {
	  });
	  $( ".readless" ).show( "slow", function() {
	  });

	  $( ".readmore" ).hide();

	  event.preventDefault();
	});



	$( ".readless" ).click(function(event) {
	  $( "#show-this-on-click" ).hide( "slow", function() {
	  });
	  $( ".readless" ).hide( "slow", function() {
	  });
	  $( ".readmore" ).show( "slow", function() {
	  });
	  event.preventDefault();
	});



	$( ".learnmore" ).click(function(event) {
	  $( "#learnmoretext" ).show( "slow", function() {
	  });

	  $( ".learnmore" ).hide();

	  event.preventDefault();
	});


});