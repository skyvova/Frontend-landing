$('a').click(function(e){
        if(e.target.href.indexOf('#') + 1){
            var id = "#" + e.target.closest('a').href.split('#')[1];
            $('html, body').animate({
			     scrollTop: $(id).offset().top - 20
		  }, 500);
	       return false;
        } 

	});