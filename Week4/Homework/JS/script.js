$(function() {
    console.log( "ready!" );




	$( ".readmore" ).click(function(e) {
	  $( "#show-this-on-click" ).slideDown( "slow", function() {
	  });
	  $( ".readless" ).show( "slow", function() {
	  });

	  $( ".readmore" ).hide();

	  e.preventDefault();
	});



	$( ".readless" ).click(function(e) {
	  $( "#show-this-on-click" ).slideUp( "slow", function() {
	  });
	  $( ".readless" ).hide( "slow", function() {
	  });
	  $( ".readmore" ).show( "slow", function() {
	  });
	  e.preventDefault();
	});



	$( ".learnmore" ).click(function(e) {
	  $( "#learnmoretext" ).slideDown( "slow", function() {
	  });

	  $( ".learnmore" ).hide();

	  e.preventDefault();
	});


});