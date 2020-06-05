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

  let itemGroups = document.getElementsByClassName("catalog__items-group")
  let target = event.target.closest("li");
  if (!target) return;

  let tabsClientRect = this.getBoundingClientRect();
  let tabsBorderLeft = tabsClientRect.x;
  let tabClientRect = target.getBoundingClientRect();
  let tabWidth = tabClientRect.width + "px";

  let targetClientRect = target.getBoundingClientRect();
  let leftBorder = targetClientRect.x;
  let x = leftBorder - tabsBorderLeft + "px";

  toggler.style.left = x;
  toggler.style.transition = "left 0.1s ease-in";

  toggler.style.width = tabWidth;

  if (target.classList.contains("catalog__tab--second")) {
    itemGroups[0].style.display = "none";
    itemGroups[1].style.display = "flex";
    itemGroups[2].style.display = "none";
  }
  if (target.classList.contains("catalog__tab--first")) {
    itemGroups[0].style.display = "flex";
    itemGroups[1].style.display = "none";
    itemGroups[2].style.display = "none";
  }
  if (target.classList.contains("catalog__tab--third")) {
    itemGroups[0].style.display = "none";
    itemGroups[1].style.display = "none";
    itemGroups[2].style.display ="flex";
  }
}
