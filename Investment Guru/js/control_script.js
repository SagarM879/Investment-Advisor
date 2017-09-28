$(document).ready(function () {
    window.setTimeout(function() {
        $(".alert").fadeTo(500, 0).slideUp(500, function(){
            $(this).remove(); 
        });
    }, 5000);
    
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $("#btn_started").click(function() {
        $("html, body").animate({ scrollTop: $('#form-section').offset().top }, "slow");
        return false;
    });
  
    $('#btn_sidebar').click(function() {
        $('.sidebar-section').toggleClass('nav-view');
        $('.main-section').fadeTo( "fast",$('.main-section').css("opacity") == "1" ? "0.8" : "1");
    });
});