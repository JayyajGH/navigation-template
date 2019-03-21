$(function() {
  $('#js-contact-form').submit(function (event) {
    $('#js-contact-form').hide();
    $('#js-contact-thankyou').show();
    event.preventDefault();
  });
});
