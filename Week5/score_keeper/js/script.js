$(function() {
    console.log( "ready!" );
    var count = 0

// $('button').click(math);


// 	function math(){

// 		$('#add5').one('click',function(){
// 			count = count + 5;
			
	
// 		});


// 		$('#add10').one('click',function(){
// 			count = count + 10;
	
// 		});
// 		$('#result').text(count);
// 	};
// });

	$('#add5').click(add5);

	function add5(){
		count += 5;
		$('#result').text(count);


	};

	$('#add10').click(add10);

	function add10(){
		count += 10;
		$('#result').text(count);


	};


	$('#sub1').click(min1);

	function min1(){
		count -=1;
		$('#result').text(count);


	};

});



