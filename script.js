document.addEventListener("DOMContentLoaded", function () {
  const playersContainer = document.getElementById("playerscontainer");
  const addPlayerBtn = document.getElementById("addPlayer");
  const form = document.getElementById("playerForm");
  let playerCount = 1;

  function createPlayerInput() {
    playerCount++;

    const container = document.createElement("div");
    container.className = "playersinputcontainer";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "player-input";
    input.placeholder = `Nome ${playerCount}`;
    input.required = true;

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "btn btn-remove";
    removeBtn.textContent = "X";
    removeBtn.onclick = function () {
      container.remove();
      playerCount--;
      updateAddButton();
    };

    container.appendChild(input);
    container.appendChild(removeBtn);
    playersContainer.appendChild(container);

    updateAddButton();
  }
  function updateAddButton() {
    addPlayerBtn.disabled = playerCount >= 6;
  }

  addPlayerBtn.addEventListener("click", createPlayerInput);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Coleta todos os nomes dos jogadores
    const players = [];
    const inputs = form.querySelectorAll(".player-input");
    inputs.forEach((input) => {
      if (input.value.trim()) {
        players.push(input.value.trim());
      }
    });

    // Aqui você pode fazer o que quiser com a lista de jogadores
    console.log("Jogadores:", players);

    // Exemplo: armazenar no localStorage
    localStorage.setItem("players", JSON.stringify(players));

    // Fecha o modal
    document.querySelector(".modal-overlay").style.display = "none";
  });
});

const botoes = document.querySelectorAll("li");
const jogador = document.querySelector(".jogador");
let holdTimer;

function preventSelect(e) {
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
