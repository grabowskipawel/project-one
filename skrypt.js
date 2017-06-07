$(document).ready(function() {
    
       var $animation_elements = $('#one');
var $window = $(window);
   
    TweenLite.to($(".short"), 1.0 , {opacity:1});
    TweenLite.to($(".firstShow"),1.0,{opacity:1 , delay:1})
     TweenLite.to($(".secondShow"),1.0,{opacity:1 , delay:1.5})
      TweenMax.to($(".short::before"), 1.0 , {opacity:1});
      TweenMax.to($(".short::after"), 1.0 , {opacity:1});
    TweenMax.to($(".thirdShow") , 1.0 ,{opacity:1 , delay:2})
    
           var windowWidth = window.innerWidth;
    
  
    
    $(window).innerWidth( function(){ // check window size, and add proper animation

    
         if(windowWidth >= 850){
             
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
              
    TweenLite.to("#contact", 1, {x:0 , opacity:1});
         TweenLite.to($(".example") ,1, {opacity:1, delay:2.0});
          TweenLite.to($("#two"), 2.0, { ease: Bounce.easeOut, x:-475 , opacity:1});
         
          TweenLite.to($("#one"), 2.0, { ease: Bounce.easeOut, x:150, opacity:1 });
        
        
       
        
    } else{
         TweenLite.to($(".example") ,2, {opacity:0});  
        TweenLite.to($animation_elements, 0.1, { ease: Power4.easeOut, x:-700, opacity:0 });         
            TweenLite.to($("#two"), 0.1, { ease: Power4.easeOut, x:350,opacity:0});
        
        
         
    }
  });
}  
    $window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');     
        
        
         }else if(windowWidth <= 1249){
             
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
              
  TweenLite.to($("#one"), 2.0 , {x:0})
  TweenLite.to($("#two"), 2.0 , {x:0})
  TweenLite.to($(".example") , 1.0, {y:0 , delay:2.0 }  )
        
       
        
    } else{
       
         TweenLite.to($(".socials"), 1.0 , {x:450})
           TweenLite.to($("#one"), 2.0 , {x:-950})
           TweenLite.to($("#two"), 2.0 , {x:950})
          TweenLite.to($(".example") , 1.0, { y:250})
    }
  });
}  
    $window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');     
        
         }
     
    
   });
    
    $(window).scroll(check_if_in_view());
     
  
    
});