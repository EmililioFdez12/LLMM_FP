
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

/* 
  window.onload = function () { */
    const IMAGENES = [
        'images/f40.jpg',
        'images/toyota_mr2.jpg',
        'images/porsche911.jpg',
        'images/audi.jpg',
        'images/gti.jpg',
        'images/lambo.jpg',
        'images/civic.jpg'
    ];

    let indiceImagenActual = 0;

    function avanzarImagen() {
      indiceImagenActual++;
      if (indiceImagenActual >= IMAGENES.length) {
        indiceImagenActual = 0;
      }
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
    document.getElementById("retroceder").addEventListener("click", retrocederImagen);