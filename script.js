const comic = document.getElementById("comic");
const paginasLoop = Array.from(document.querySelectorAll(".loop"));

const repeticoes = 5; // 🔁 MUDE AQUI

for (let i = 0; i < repeticoes; i++) {
  paginasLoop.forEach(pagina => {
    const clone = pagina.cloneNode(true);
    comic.appendChild(clone);
  });
}
