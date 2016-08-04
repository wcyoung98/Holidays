$(document).ready(function(){
	setInterval(function(){
		$.get('/Company/ajax.jsp', function(data){
			$('#wrap').html(data);
		});
	}, 1000);
});