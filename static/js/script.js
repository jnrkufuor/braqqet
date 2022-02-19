$(document).ready(function(){   
    
    
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 150) {
            $(".header").css('background-color', 'rgba(255,255,255,0.85)');
        } else {
            $(".header").css('background-color', 'rgba(255,255,255,0)');
        }
    });

    $(".logo").click(function() {
        // window.location.href=window.location.hostname;
    });
});