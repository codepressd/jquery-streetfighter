$(document).ready(function(){
	//Control Ryu
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	}).mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	}).mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate({'left': '1080px'}, 
			500,
			function(){
				$(this).hide();
				$(this).css('left', '580px');
			});
	}).mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	//Control Hulk Ryu

	$('.hulk-ryu').mouseenter(function(){
		$('.hulk-ryu-still').hide();
		$('.hulk-ryu-ready').show();
	}).mouseleave(function(){
		$('.hulk-ryu-ready').hide();
		$('.hulk-ryu-still').show();
	}).mousedown(function(){
		playHadouken();
		$('.hulk-ryu-ready').hide();
		$('.hulk-ryu-throwing').show();
		$('.hulk-hadouken').finish().show().animate({'left': '300px'}, 
			500,
			function(){
				$(this).hide();
				$(this).css('left', '800px');
			});
	}).mouseup(function(){
		$('.hulk-ryu-throwing').hide();
		$('.hulk-ryu-ready').show();
	});

	$(document).keydown(function(e){
		if(e.which == 88){
			$('.ryu-still, .hulk-ryu-still').hide();
			$('.ryu-ready, .hulk-ryu-ready').hide();
			$('.ryu-cool, .hulk-ryu-cool').show();
		}
	}).keyup(function(){
		$('.ryu-cool, .hulk-ryu-cool').hide();
		$('.ryu-still, .hulk-ryu-still').show();
	});
});

//sound function

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}