$(".overlay").click(function(e) {
  e.preventDefault();

  var overlay = $('<div id="overlay"><div class="overlay-header"><a class="close">x</a></div><div class="overlay-body"></div></div>');
  var url = $(this).data('overlay-url');

  overlay.appendTo(document.body);

  $('#overlay .overlay-body').load(url, function() {
    $('#overlay .close').click(function(e) {
      e.preventDefault();

      overlay.remove();
    });

    $('#overlay .submit').click(function(e) {
      e.preventDefault();
      console.log('here');

      $('#overlay .overlay-body').html('<p>Thank you for your submission. Someone will be contacting you shortly.</p>');
    });
  });
});

