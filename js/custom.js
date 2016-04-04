// Can also be used with $(document).ready()






$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });

  $('.nav').click(function(){
		$(this).parent().find('.menu').toggleClass('open');
	})

  $('.slider').find('ol').addClass('pagging');
  $('.pagging').find('a').empty();
  $('.slider').find('ul.flex-direction-nav').addClass('nextPrev');
  $('.nextPrev').find('a').empty();
  $('.nextPrev').find('li:first-child a').append('<i class="fa fa-angle-double-left"></i>');
  $('.nextPrev').find('li:last-child a').append('<i class="fa fa-angle-double-right"></i>');

  //animate
 

});


	