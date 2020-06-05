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

const tabs = document.querySelector(".catalog__tabs");
const toggler = document.querySelector(".catalog__toggler");

tabs.onclick = function(evt) {
  evt.preventDefault();
  let tabsClientRect = this.getBoundingClientRect();
  let tabsBorderLeft = tabsClientRect.x;
  let target = event.target.closest("li");
  if (!target) return;

  let tabClientRect = target.getBoundingClientRect();
  let tabWidth = tabClientRect.width + "px";

  let targetClientRect = target.getBoundingClientRect();
  let leftBorder = targetClientRect.x;
  let x = leftBorder - tabsBorderLeft + "px";

  toggler.style.left = x;
  toggler.style.width = tabWidth;



}
