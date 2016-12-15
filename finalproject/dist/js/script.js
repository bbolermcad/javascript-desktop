$( document ).ready(function() {
    //hover effects for the image gallery//
    $(".projects").mouseenter(function() {
    	$(this).fadeTo('fast', 0.5);
    });

    $(".projects").mouseleave(function(){
    	$(this).fadeTo('fast', 1);
    });

     /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $(".hideme").each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},2000);
                    
            }
            
        }); 
    
    });

  //text animations//

  $('').textillate({ in: { effect: 'fadeInLeft', delayScale: 10, delay: 50} });

  $('.maintext').textillate({ in: { effect: 'rollIn'} });
    
});