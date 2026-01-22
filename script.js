const comic = document.getElementById("comic");

let scrollTimeout = null;

window.addEventListener("scroll", () => {
  if (scrollTimeout) return;

  scrollTimeout = setTimeout(() => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight;

    // Se chegou no FINAL
    if (scrollTop + windowHeight >= scrollHeight - 5) {
      window.scrollTo({
        top: 1,
        behavior: "smooth"
      });
    }

    // Se voltou para o TOPO
    if (scrollTop <= 0) {
      window.scrollTo({
        top: scrollHeight - windowHeight - 1,
        behavior: "smooth"
      });
    }

    scrollTimeout = null;
  }, 100);
});
