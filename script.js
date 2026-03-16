// Animación scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.2 },
);

document
  .querySelectorAll(".fade-in, .fade-in-delay")
  .forEach((el) => observer.observe(el));

// Cambiar fondo de header al hacer scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Enviar formulario
function enviarFormulario(e) {
  e.preventDefault();
  document.getElementById("contactForm").reset();
  const msg = document.getElementById("formMessage");
  msg.classList.remove("hidden");
  setTimeout(() => msg.classList.add("hidden"), 4000);
  return false;
}

// Función para calcular --vh y manejar la barra dinámica de Safari en iOS
function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

// Ejecutar al cargar y al redimensionar
setVh();
window.addEventListener("resize", setVh);
