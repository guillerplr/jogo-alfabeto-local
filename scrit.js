const botoes = document.querySelectorAll("li");

let holdTimer;

function preventSelect(e){
  e.preventDefault();
}

function handleMouseDown(e) {
  e.preventDefault();
  e.target.classList.add("selecionado");
  holdTimer = setTimeout(function () {
    e.target.classList.remove("selecionado");
}, 1000);
}

function handleMouseUp(e) {
  clearTimeout(holdTimer);
}

botoes.forEach((e) => {
  e.addEventListener("mousedown", handleMouseDown);
  e.addEventListener("mouseup", handleMouseUp);
  e.addEventListener("touchstart", handleMouseDown);
  e.addEventListener("touchend", handleMouseUp);
  e.addEventListener("selectstart", preventSelect);
  e.addEventListener("touchmove", preventSelect);
  e.addEventListener("contextmenu", preventSelect);
});
