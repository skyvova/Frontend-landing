(function( $ ){
	
	//// ---> Проверка на существование элемента на странице
	jQuery.fn.exists = function() {
	   return jQuery(this).length;
	};
	
	//	Phone Mask
	$(function() {
		
    if(!is_mobile()){
    
      if($('#user_phone2').exists()){
        
        $('#user_phone2').each(function(){
          $(this).mask("+38 (999) 999-99-99");
        });
        $('#user_phone2')
          .addClass('rfield')
          .removeAttr('required')
          .removeAttr('pattern')
          .removeAttr('title')
          .attr({'placeholder':'Номер Вашего телефона...'});
      }
      
      if($('#cform2').exists()){
        
        var form = $('#cform2'),
          btn = form.find('.btn_submit');
        
        form.find('.rfield').addClass('empty_field');
      
//        setInterval(function(){
//        
//          if($('#user_phone2').exists()){
//            var pmc = $('#user_phone2');
//            if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
//              pmc.addClass('empty_field');
//            } else {
//                pmc.removeClass('empty_field');
//            }
//          }
//          
//          var sizeEmpty = form.find('.empty_field').size();
//          
//          if(sizeEmpty > 0){
//            if(btn.hasClass('disabled')){
//              return false
//            } else {
//              btn.addClass('disabled')
//            }
//          } else {
//            btn.removeClass('disabled')
//          }
//          
//        },200);

        btn.click(function(){
          if($(this).hasClass('disabled')){
            return false
          } else {
            form.submit();
          }
        });
        
      }
    }

	});

})( jQuery );