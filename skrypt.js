$(document).ready(function() {
    
  /* $(window).resize(function(){ // check window size, and add proper animation
       var windowWidth = window.innerWidth;
    
         if(windowWidth >= 850){
             alert("Mam 850 px lub więcej")
         }else if(windowWidth <=850){
             alert("Mam mniej niż 850px")
         }
     
    
   });*/
     
    
     var $animation_elements = $('#one');
var $window = $(window);
     
   function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
              
    
        
          TweenLite.to($("#two"), 1.5, { ease: Bounce.easeOut, x:-475});
         
          TweenLite.to($("#one"), 1.5, { ease: Bounce.easeOut, x:150 });
        
        
       
        
    } else{
        
        TweenLite.to($animation_elements, 0.1, { ease: Power4.easeOut, x:-700 });
         
            TweenLite.to($("#two"), 0.1, { ease: Power4.easeOut, x:350});
        
        
         
    }
  });
}  
    $window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');     
        
    
});