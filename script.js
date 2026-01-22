document.addEventListener("DOMContentLoaded", () => {
  const comic = document.getElementById("comic");
  const paginasLoop = Array.from(document.querySelectorAll(".loop"));

  const repeticoes = 5; // 🔁 mude aqui se quiser

  if (paginasLoop.length === 0) {
    console.error("Nenhuma página com classe .loop encontrada");
    return;
  }

  for (let i = 0; i < repeticoes; i++) {
    paginasLoop.forEach(pagina => {
      const clone = pagina.cloneNode(true);
      comic.appendChild(clone);
    });
  }
});
