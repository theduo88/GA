$(function(){
	$('#submit').click(compare);



function compare(){
	var a = parseInt($('#a').val());
	var b = parseInt($('#b').val());
	
			if(a>b){
				$('#comparison').text('>');
			}
			else if(a<b){
				$('#comparison').text('<')

			}
			else{
				$('#comparison').text('=')

		}
	};
});
