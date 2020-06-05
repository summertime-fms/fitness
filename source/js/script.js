const mainBlockLink = document.querySelector(".intro__button");

mainBlockLink.addEventListener("click", function(evt) {
 evt.preventDefault();
  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  }, {
      duration: 370,
      easing: "swing"
  });

  return false;
});
