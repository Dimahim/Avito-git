// отправка данных на почту
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.modal').modal('hide');
			setTimeout(function() {
			$('.success').fadeToggle();
				th.trigger("reset");
			}, 1000);
          setTimeout(function() {
	    	$('.success').fadeToggle();
	    	}, 2500);
          
		});
		return false;
	});
	new WOW().init();
});