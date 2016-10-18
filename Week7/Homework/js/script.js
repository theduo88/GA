$(function(){


	$('header nav ul li:first-child').click(dropDown)

	function dropDown()	{

		console.log($(this).parent());
		$(this).parent().toggleClass('dropDown');


	}




})