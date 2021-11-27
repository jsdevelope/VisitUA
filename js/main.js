$(function () {
	$('.menu-open').click(function () {
		$('.menu').toggleClass('show-menu');
	});
});


var counter = 1;
setInterval(function(){
	document.getElementById('radio' + counter).checked = true;
	counter++;
	if(counter > 4) {
		counter = 1;
	}

}, 3000);