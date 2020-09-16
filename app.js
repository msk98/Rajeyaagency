$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 800);
    $('dropdown-menu').toggleClass('scrolled', $(this).scrollTop() > 800);
    });
   