let table = document.querySelector(".table");
let blocks = table.querySelectorAll(".table__block");
let daysRow = document.querySelector(".table__row--days");


function highlightTime(element) {
  element.style.backgroundColor = "#ED0233";
  element.style.color = "#ffffff";
  element.style.border = "none";
}

function removeHighlight(element) {
  element.style = "";
}

function highlightExercise(element) {
  element.style.color = "#ED0233";
  element.style.border = "2px solid #ED0233";
  element.style.backgroundColor = "#ffffff";
}


for (let i = 0; i < blocks.length; i++) {
  blocks[i].onmouseover = function(evt) {

    let target = evt.target;
    if (!target.classList.contains("table__block--day") && !target.classList.contains("table__block--transparent") &&  !target.classList.contains("table__block--time")) {
    let parent = target.parentNode;
    let index = target.cellIndex;
    let day = daysRow.cells[index];
    let time = parent.firstElementChild;
    highlightExercise(target);
    highlightTime(time);
    highlightTime(day)


    blocks[i].onmouseout = function() {
      removeHighlight(time)
      removeHighlight(day);
      removeHighlight(target);
    }

}
}}
