$(function() {
  $('#js-contact-form').on('submit', function () {
    $('#js-contact-form').hide();
    $('#js-contact-thankyou').show();
    return false;
  });
});
