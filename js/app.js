function alterarStatus(id) {
  let game = document.getElementById(`game-${id}`);
  let div = game.querySelector(".dashboard__item__img");
  let botao = game.querySelector(".dashboard__item__button");

  if (div.classList.contains("dashboard__item__img--rented")) {
    div.classList.remove("dashboard__item__img--rented");
    botao.classList.remove("dashboard__item__button--return");
    botao.innerHTML = "Alugar";
  } else {
    div.classList.add("dashboard__item__img--rented");
    botao.classList.add("dashboard__item__button--return");
    botao.innerHTML = "Devolver";
  }
}
