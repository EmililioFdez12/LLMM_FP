
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


    const IMAGENES = [
        'images/f40.jpg',
        'images/toyota_mr2.jpg',
        'images/porsche911.jpg',
        'images/audi.jpg',
        'images/gti.jpg',
        'images/lambo.jpg',
        'images/civic.jpg'
    ];

    document.addEventListener('DOMcontentLoaded',()=>{
      const inner = document.querySelector('.galeria-inner');
      const prev = document.querySelector('.retroceder');
      const next = document.querySelector('.avanzar');
      const imgWidth = document.querySelector('img').clientWidth;

      let currentIndex = 0;

      prev.addEventListener('click',(event)=>{
        event.preventDefault();
        currentIndex = Math.max(currentIndex - 1 , 0);

        inner.style.transform = `translateX(-${currentIndex * imgWidth}px)`
      })

      next.addEventListener('click',(event)=>{
        event.preventDefault();
        currentIndex = Math.min(currentIndex + 1 , inner.childElementCount - 1);

        inner.style.transform = `translateX(-${currentIndex * imgWidth}px)`
      })

    })

    









































    /* let indiceImagenActual = 0;

    function avanzarImagen() {
      indiceImagenActual++;
      if (indiceImagenActual >= IMAGENES.length) {
        indiceImagenActual = 0;
      }
      inner.style.transform = `translateX(-${indiceImagenActual * imgWidth}px)`;
      document.getElementById("fotos").src = IMAGENES[indiceImagenActual];
    }

    function retrocederImagen() {
      indiceImagenActual--;
      if (indiceImagenActual < 0) {
        indiceImagenActual = IMAGENES.length - 1;
      }

      if (indiceImagenActual >= IMAGENES.length) {
        indiceImagenActual = 0;
      }
      document.getElementById("fotos").src = IMAGENES[indiceImagenActual];
    }
    
    document.getElementById("avanzar").addEventListener("click", avanzarImagen);
    document.getElementById("retroceder").addEventListener("click", retrocederImagen); */