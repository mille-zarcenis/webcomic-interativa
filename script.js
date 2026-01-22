const paginas = document.querySelectorAll(".pagina");

const ultimaPagina = paginas[paginas.length - 1];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // quando a última imagem aparece
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }, 800);
      }
    });
  },
  {
    threshold: 0.6
  }
);

observer.observe(ultimaPagina);

