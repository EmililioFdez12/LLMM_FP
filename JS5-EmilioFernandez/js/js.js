
document.addEventListener('DOMContentLoaded', function() {
    // Escucha el evento de clic en el enlace
    // anchor en <a></a>
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        // previene que haga la accion default de los enlaces(que vaya directamente al enlace)
        e.preventDefault();

        let targetId = this.getAttribute('href').substring(1); // substring para que no cuente el # del #galeria
        let targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });