$('#home-carousel').on('slide.bs.carousel', function (event) {
  $("#carousel-thumbnails img").removeClass("active");
  $("#carousel-thumbnails img:eq(" + event.to + ")").addClass("active");
});