const botoes = document.querySelectorAll("li");

let holdTimer;

function handleMouseDown(e) {
  e.target.classList.add("selecionado");
  e.preventDefault();
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
});
