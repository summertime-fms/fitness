let items = document.getElementsByTagName("td");



for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseover", function() {
    light(items[i])
  })
};

function light(item) {
  item.parentNode.style.backgroundColor = "blue";
}
