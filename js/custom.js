$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });

  $('.nav').click(function(){
		$(this).parent().find('.menu').toggleClass('open');
    $('.header-mid').toggleClass('open');
	})



  $('.slider').find('ol').addClass('pagging');
  $('.pagging').find('a').empty();
  $('.slider').find('ul.flex-direction-nav').addClass('nextPrev');
  $('.nextPrev').find('a').empty();
  $('.nextPrev').find('li:first-child a').append('<i class="fa fa-angle-double-left"></i>');
  $('.nextPrev').find('li:last-child a').append('<i class="fa fa-angle-double-right"></i>');


});

$(window).resize(function(){
  if ($(window).width() <= 768){  
    $(".item").removeClass('flex');
  } else if ($(window).width() > 768){
    $(".item").addClass('flex');
  } 
});


	