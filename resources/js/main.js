
$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
});
});



var scrollStartPoint = 0;
var scrollTarget;
var navHeight = $('.navbar').css('height');

$('window').scroll(function() {
  scrollTarget = $(this).scrollTop();
  if (scrollTarget - scrollStartPoint > 50) {
    var navHeight = $('.navbar').css('height');
    $('.navbar').animate({
      top: '-' + navHeight}, 150);
    scrollStartPoint = scrollTarget;
  } else if (scrollStartPoint - scrollTarget > 50) {
    $('.navbar').animate({
      top: '0px'}, 150);
    scrollStartPoint = scrollTarget
  }


});
