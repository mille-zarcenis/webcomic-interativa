const comic = document.getElementById("comic");
const paginasLoop = Array.from(document.querySelectorAll(".loop"));

const repeticoes = 5; // 🔁 MUDE AQUI

for (let i = 0; i < repeticoes; i++) {
  paginasLoop.forEach(pagina => {
    const clone = pagina.cloneNode(true);
    comic.appendChild(clone);
  });
}

function ativarInteracaoPagina2(pagina) {
  const celular = pagina.querySelector(".celular");
  const mao = pagina.querySelector(".mao");

  let ativado = false;

  pagina.addEventListener("click", () => {
    if (ativado) return;
    ativado = true;

    // mão cresce
    mao.style.transform = "scale(1)";

    // depois do crescimento, verifica colisão
    setTimeout(() => {
      if (encostou(mao, celular)) {
        celular.style.animation = "none";
      }
    }, 800);
  });
}

function encostou(a, b) {
  const r1 = a.getBoundingClientRect();
  const r2 = b.getBoundingClientRect();

  return !(
    r1.right < r2.left ||
    r1.left > r2.right ||
    r1.bottom < r2.top ||
    r1.top > r2.bottom
  );
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".pagina-interativa")
    .forEach(pagina => ativarInteracaoPagina2(pagina));
});
