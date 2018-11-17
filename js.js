(function($) {

    $(document).ready(function() {

        var winH = $(window).height();

        $(window).scroll(function () {

          function isScrolledIntoView(elem) {
            var elementTop = $(elem).offset().top;
            var elementBottom = elementTop + $(elem).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            return (elementBottom > viewportTop && elementTop < viewportBottom);
          }
          
  
          $('.text').each(function(){

            $(this).css('bottom', a );

            $(this).addClass('activElem');
  
            if (isScrolledIntoView(this) == true) {
  
              var $thisTopOffset = $(this).offset().top;
              var elemTopScroll = $thisTopOffset - $(window).scrollTop();
  
              var $thisH = $(this).height();
              var $thisParentH = $(this).parent().parent().height();
  
              var a = (($thisParentH-$thisH)/winH)*elemTopScroll;
  
              $(this).css('bottom', a );
            }
          });
  
        
        });	 // end $(window).scroll(function () 
        
        
    });
})(jQuery);
