// ******Polyfills******
(function() {

  if (!Element.prototype.matches) {

    Element.prototype.matches = Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;

  }

})();
(function() {


  if (!Element.prototype.closest) {
    Element.prototype.closest = function(css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }

})();
// *********

$( document ).ready(function(){
function getMaxHeight() {
  var comments = document.getElementsByClassName("comments__slide");

  var maxHeight = 0;

      for (var i = 0; i < comments.length; i++) {
        let elemHeight = getHeight(comments[i])

        if (elemHeight > maxHeight) {
          maxHeight = elemHeight;

        }
      }

  function getHeight(element) {
    let styles = getComputedStyle(element);
    let height = parseInt(styles.height);
    return height;
  }
return maxHeight
}


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
  let tabsBorderLeft = tabsClientRect.left;
  let tabClientRect = target.getBoundingClientRect();
  let tabWidth = tabClientRect.width + "px";

  let targetClientRect = target.getBoundingClientRect();
  let leftBorder = targetClientRect.left;
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


                // ***Sliders***

var mySwiper = new Swiper ('.coaches__slider-wrapper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.coaches__button-next',
    prevEl: '.coaches__button-prev',
  },

  spaceBetween: 40,


  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
      width:226
    },
    768: {
       slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      width: 536

    },
    1200: {
      slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: 40,
      width: 1160

    }


  }
})

var mySwiper1 = new Swiper('.comments__slider', {
  direction: 'horizontal',
  loop: true,
  height: getMaxHeight(),
  navigation: {
    nextEl: '.comments__button-next',
    prevEl: '.comments__button-prev',
  },
  slidesPerView: 1,
  slidesPerGroup: 1,

  spaceBetween: 0,

});
});
