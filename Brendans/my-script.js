$(function() {
  $('#js-contact-form').submit(function (event) {
    $('#js-contact-form').hide();
    $('#js-contact-thankyou').show();

    // https://501n7ggn65.execute-api.eu-west-1.amazonaws.com/dev
    
    event.preventDefault();
  });
});
