$(function() {
  $('.js-trigger').click(function () {
      $(this).toggleClass('hamburger--close');
      $('.site-nav').toggleClass('is-active');
    });
});
