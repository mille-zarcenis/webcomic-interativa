const paginas = document.querySelectorAll(".pagina");
let atual = 0;

function mostrarPagina(index) {
  paginas.forEach(p => {
    p.classList.remove("ativa");
    p.style.display = "none";
  });

  paginas[index].style.display = "block";
  setTimeout(() => {
    paginas[index].classList.add("ativa");
  }, 50);
}

mostrarPagina(atual);

document.addEventListener("click", () => {
  paginas[atual].classList.remove("ativa");

  setTimeout(() => {
    atual++;

    if (atual >= paginas.length) {
      atual = 0; // depois podemos mudar isso 😉
    }

    mostrarPagina(atual);
  }, 800);
});
