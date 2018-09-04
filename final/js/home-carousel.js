$('#home-carousel').on('slide.bs.carousel', function (event) {
  $("#carousel-thumbnails li").removeClass("active");
  $("#carousel-thumbnails li:eq(" + event.to + ")").addClass("active");
  console.log(event);
});