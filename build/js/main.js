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
//COMMENTS-SLIDER MAX-HEIGHT

$(document).ready(function() {
function getMaxHeight() {
  let comments = document.getElementsByClassName('comments__slide');
  if (comments) {

  let maxHeight = 0;

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
}}

// AUTOSCROLL TO CATALOG SEECTION

let mainBlockLink = document.querySelector('.intro__button');
if (mainBlockLink){

mainBlockLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  }, {
      duration: 370,
      easing: 'swing'
  });

  return false;
})};

//CATALOG TABS TOGGLING

let tabs = document.querySelector('.catalog__tabs');
let toggler = document.querySelector('.catalog__toggler');
 if (tabs) {
tabs.onclick = function(evt) {
  evt.preventDefault();

  let itemGroups = document.getElementsByClassName('catalog__items-group')
  let target = event.target.closest('li');
  if (!target) return;

  let tabsClientRect = this.getBoundingClientRect();
  let tabsBorderLeft = tabsClientRect.left;
  let tabClientRect = target.getBoundingClientRect();
  let tabWidth = tabClientRect.width + 'px';

  let targetClientRect = target.getBoundingClientRect();
  let leftBorder = targetClientRect.left;
  let x = leftBorder - tabsBorderLeft + 'px';

  toggler.style.left = x;
  toggler.style.transition = 'left 0.1s ease-in';

  toggler.style.width = tabWidth;

  if (target.classList.contains('catalog__tab--second')) {
    itemGroups[0].style.display = 'none';
    itemGroups[1].style.display = 'flex';
    itemGroups[2].style.display = 'none';
  }
  if (target.classList.contains('catalog__tab--first')) {
    itemGroups[0].style.display = 'flex';
    itemGroups[1].style.display = 'none';
    itemGroups[2].style.display = 'none';
  }
  if (target.classList.contains('catalog__tab--third')) {
    itemGroups[0].style.display = 'none';
    itemGroups[1].style.display = 'none';
    itemGroups[2].style.display ='flex';
  }
}}

//SLIDER

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
      width: 566

    },
    1200: {
      slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: 40,
      width: 1040

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
})
// INTERRACTIVE TIMETABLE

let table = document.querySelector('.table');
let blocks = table.querySelectorAll('.table__block');
let daysRow = document.querySelector('.table__row--days');

if(table) {

for (let i = 0; i < blocks.length; i++) {
  blocks[i].onmouseover = function(evt) {

    let target = evt.target;

    if (!target.classList.contains('table__block--day') && !target.classList.contains('table__block--transparent') &&  !target.classList.contains('table__block--time')) {

    let parent = target.parentNode;
    let index = target.cellIndex;
    let day = daysRow.cells[index];
    let time = parent.firstElementChild;

    target.classList.add('table__block--highlighted');
    time.classList.add('table__block--red-highlighted');
    day.classList.add('table__block--red-highlighted');

    blocks[i].onmouseout = function() {
      time.classList.remove('table__block--red-highlighted');
      day.classList.remove('table__block--red-highlighted');
      target.classList.remove('table__block--highlighted');
    }
}
}}
}
