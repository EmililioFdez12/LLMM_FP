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

  
    document.addEventListener('DOMContentLoaded', () => {
      const inner = document.querySelector('.carousel-inner');
      const prev = document.querySelector('.carousel-prev');
      const next = document.querySelector('.carousel-next');
      const imgWidth = document.querySelector('.carousel-inner img').clientWidth;
    
      let currentIndex = 0;
    
      prev.addEventListener('click', (event) => {
        event.preventDefault();
        currentIndex = Math.max(currentIndex - 1, 0);
        inner.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
      });
    
      next.addEventListener('click', (event) => {
        event.preventDefault();
        currentIndex = (currentIndex + 1) % inner.childElementCount;
        inner.style.transform = `translateX(-${currentIndex * imgWidth}px)`;
      });
    });
    
    
