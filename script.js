let slideIndex = 0;
mostrarSlides();

function mostrarSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(mostrarSlides, 5000); // Cambia cada 5 segundos
}
<script>
  // Para que funcione con clic en móviles
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentElement.classList.toggle('active');
    });
  });

  // Cerrar menú al hacer clic fuera (opcional)
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
    }
  
</script>