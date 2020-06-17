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
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerGroup: 4,
      slidesPerView: 4,
      spaceBetween: 40
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

if (table) {

  // $(".timetable__table").niceScroll(".timetable__table-wrapper",{cursorcolor:"aquamarine"});

  let blocks = table.querySelectorAll('.table__block');
  let rows = document.querySelectorAll('.table__row');
  let daysRow = table.querySelector('.table__row--days');
  let days = daysRow.querySelectorAll('.table__block--day')
  let tableBody = table.querySelector('.table__body');
  let cells = tableBody.querySelectorAll('.table__block--exercise');
  let currentDay = table.querySelector('.table__block--current');
  let timelines = tableBody.querySelectorAll('.table__block--time');



  function getIndex(element) {
    let index;
    for (let i = 0; i < rows.length; i++) {
      let  cells = rows[i].querySelectorAll('.table__block');

      for (let j = 0; j < cells.length; j++) {

        if (element == cells[j]) {
          index = j - 1;

          return index;
          break
        }
      }
    }
  }

  function showCells(index) {
  for (let l = 0; l < cells.length; l++) {
    let cellIndex = getIndex(cells[l]);
    if (cellIndex === index) {
      cells[l].classList.remove('table__block--hide')
    }
  }
  }


  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.add('table__block--hide')
  }

  let currentDayIndex = getIndex(currentDay);
  showCells(currentDayIndex)
  for (let v = 0; v < days.length; v++) {
    if (!days[v].classList.contains('table__block--current')) {
      days[v].classList.add('table__block--hide');
    }
  }
  for (let f = 0; f < blocks.length; f++) {

  blocks[f].onmouseover = function(evt) {

    let target = evt.target;

    let day;

    if (!target.classList.contains('table__block--day') && !target.classList.contains('table__block--transparent') &&  !target.classList.contains('table__block--time')) {

      let index = getIndex(target);
      day = days[index];

      day.classList.add('table__block--red-highlighted')

      let parent = target.parentNode;
      let time = parent.firstElementChild;

      target.classList.add('table__block--highlighted')
      time.classList.add('table__block--red-highlighted')

      target.onmouseout = function() {
        target.classList.remove('table__block--highlighted')
        time.classList.remove('table__block--red-highlighted')
        day.classList.remove('table__block--red-highlighted');
    }
  }}
  }
  let button = document.querySelector('.timetable__button');

  for (let i = 0; i < days.length; i++) {
    days[i].addEventListener('click', function () {
      daysRow.classList.remove('table__block--bordered');
      for (let j = 0; j < days.length; j++) {

        if (days[j].classList.contains('table__block--current')) {
            days[j].classList.remove('table__block--current')
          }
        if (!days[i].classList.contains('table__block--current')) {
          days[i].classList.add('table__block--current')
          }
          tableBody.style.top = '0'
      let index = getIndex(days[i])
      for (let h = 0; h < cells.length; h++) {
        if (!cells[h].classList.contains('table__block--hide')) {
          cells[h].classList.add('table__block--hide')
          }
        }
        showCells(index);
        for (let j = 0; j < days.length; j++) {
          if (!days[j].classList.contains('table__block--current')) {
            days[j].classList.add('table__block--hide')
            }
          }
          button.classList.remove('timetable__button--opened')
    }
    tableBody.style.top = '0'
    for (let p = 0; p < timelines.length; p++) {
      timelines[p].classList.remove('table__block--disabled');
    }
  })

    }

  button.addEventListener('click', function() {
    button.classList.toggle('timetable__button--opened');

      if (button.classList.contains('timetable__button--opened')) {
        daysRow.classList.add('table__block--bordered');
        for (let p = 0; p < timelines.length; p++) {
          timelines[p].classList.add('table__block--disabled');
        }
        for (let i = 0; i < days.length; i++) {
          days[i].classList.remove('table__block--hide')
          days[i].classList.remove('table__block--current')
          // days[i].style.borderTop = "";

          if (days[i].classList.contains('table__block--current')) {
            days[i].classList.remove('.table__block--bordered');
            }
          }

          for (let j = 0; j < cells.length; j++) {
            cells[j].classList.add('table__block--hide');
          }


          tableBody.style.top = '-340px'

      } else {
        for (let p = 0; p < timelines.length; p++) {
          timelines[p].classList.remove('table__block--disabled');
        }

          for (let j = 0; j < days.length; j++) {
            if (!days[j].classList.contains('table__block--current')) {
              days[j].classList.add('table__block--hide')
            }

            else {

              days[j].style.borderTop = '2px solid #1c3374';

              let dayIndex = getIndex(days[j]);

              for (let h = 0; h < cells.length; h++) {
                let cellIndex = getIndex(cells[h]);
                  if (dayIndex == cellIndex) {
                    cells[h].classList.remove('table__block--hide')
                  } else {
                  cells[h].classList.add('table__block--hide');
                  }
               }
          }
          tableBody.style.top = '0'
      }}
  })
}
