(function($) { 
	"use strict";
	
jQuery(document).ready(function(){
	// $('#subscribeform').submit(function(){
    //
	// 	var action = $(this).attr('action');
    //
	// 	// $("#mesaj").slideUp(750,function() {
	// 		// $('#mesaj').hide();
    //
	// 		// $('#subsubmit')
	// 		// 	.before('<img src="images/ajax-loader.gif" class="contact-loader" />')
	// 			// .attr('disabled','disabled');
    //
	// 		$.post(action, {
	// 				// name: $('#name2').val(),
	// 				email: $('#subemail1').val()
	// 				// skype: $('#skype2').val(),
	// 				// comments: $('#user_phone2').val()
	// 			},
	// 			function(data){
	// 				document.getElementById('mesaj1').innerHTML = data;
	// 				// $('#mesaj').slideDown('slow');
	// 				//$('#cform2 img.contact-loader').fadeOut('slow',function(){$(this).remove()});
	// 				// $('#subsubmit').removeAttr('disabled');
	// 				// if(data.match('success') != null) $('#subscribeform').slideUp('slow');
	// 			// }
	// 		// );
    //
	// 	});
    //
	// 	return false;
    //
	// });
	$('#cform2').submit(function(){

		var action = $(this).attr('action');

		$("#message2").slideUp(750,function() {
		$('#message2').hide();

 		$('#submit')
			.before('<img src="images/ajax-loader.gif" class="contact-loader" />')
			.attr('disabled','disabled');

		$.post(action, {
			name: $('#name2').val(),
			email: $('#email2').val(),
			skype: $('#skype2').val(),
			comments: $('#user_phone2').val()
		},
			function(data){
				if (data == "success") {
					location.href = "./zayavka.html";
					return
				}
				document.getElementById('message2').innerHTML = data;
				$('#message2').slideDown('slow');
				//$('#cform2 img.contact-loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#cform2').slideUp('slow');
			}
		);

		});

		return false;

	});
	$('#cform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(750,function() {
			$('#message').hide();

			$('#submit')
				.before('<img src="images/ajax-loader.gif" class="contact-loader" />')
				.attr('disabled','disabled');

			$.post(action, {
					name: $('#name').val(),
					email: $('#email').val(),
					skype: $('#skype').val(),
					comments: $('#user_phone').val()
				},
				function(data){
					if (data == "success") {
						location.href = "./zayavka.html";
						return
					}
					document.getElementById('message').innerHTML = data;
					$('#message').slideDown('slow');
					//$('#cform img.contact-loader').fadeOut('slow',function(){$(this).remove()});
					$('#submit').removeAttr('disabled');
					if(data.match('success') != null) $('#cform').slideUp('slow');
				}
			);

		});

		return false;

	});

});

}(jQuery));