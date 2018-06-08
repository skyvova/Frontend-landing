(function( $ ){

    //// ---> Проверка на существование элемента на странице
    jQuery.fn.exists = function() {
        return jQuery(this).length;
    }

    //	Phone Mask
    $(function() {

        if(!is_mobile()){

            if($('#comments').exists()){

                $('#comments').each(function(){
                    $(this).mask("(999) 999-99-99");
                });
                $('#comments')
                    .addClass('rfield')
                    .removeAttr('required')
                    .removeAttr('pattern')
                    .removeAttr('title')
                    .attr({'placeholder':'(___) ___ __ __'});
            }

            if($('#cform').exists()){

                var form = $('#cform'),
                    btn = form.find('.btn_submit');

                form.find('.rfield').addClass('empty_field');

                setInterval(function(){

                    if($('#comments').exists()){
                        var pmc = $('#comments');
                        if ( (pmc.val().indexOf("_") != -1) || pmc.val() == '' ) {
                            pmc.addClass('empty_field');
                        } else {
                            pmc.removeClass('empty_field');
                        }
                    }

                    var sizeEmpty = form.find('.empty_field').size();

                    if(sizeEmpty > 0){
                        if(btn.hasClass('disabled')){
                            return false
                        } else {
                            btn.addClass('disabled')
                        }
                    } else {
                        btn.removeClass('disabled')
                    }

                },200);

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