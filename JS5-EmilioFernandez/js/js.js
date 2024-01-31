document.addEventListener('DOMContentLoaded', function () {
  // Check for stored dark mode preference
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    modoOscuro(); // Apply dark mode if preference is set
  }

  // Escucha el evento de clic en el enlace anchor en <a></a>
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

document.addEventListener('DOMContentLoaded', () => {
  const inner = document.querySelector('.carousel-inner');
  const play = document.querySelector('#reanudar');
  const stop = document.querySelector('#parar');
  const imgWidth = document.querySelector('.carousel-inner img').clientWidth;
  const totalImages = inner.querySelectorAll('.fotos').length;

  let currentIndex = 0;
  let timer;

  play.addEventListener('click', (event) => {
    event.preventDefault();
    autoplay();
  });

  stop.addEventListener('click', (event) => {
    event.preventDefault();
    clearTimeout(timer);
  });

  function autoplay() {
    // Vuelve a la primera imagen
    currentIndex = 0;
    showNextImage();
  }

  function showNextImage() {
    // Vemos si esta en la ultima imagen
    if (currentIndex >= totalImages) {
      // Si se pasa se resetea el timer
      clearTimeout(timer);
      return;
    }

    // Calculamos cuanto se tiene que "mover" la animacion
    // El "-" esta porque si no va hacia el lado contrario
    const translateValue = -currentIndex * imgWidth;
    // Mostrar la imagen, en movimiento
    inner.style.transform = `translateX(${translateValue}px)`;
    currentIndex++;

    // Velocidad de la animación
    timer = setTimeout(showNextImage, 1500);

  }
});

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  // Toggle dark mode class on body
  body.classList.toggle("body-darkmode");

  // Store dark mode preference
  localStorage.setItem('darkMode', body.classList.contains("body-darkmode"));

  // Apply dark mode if body has 'body-darkmode' class
  if (body.classList.contains("body-darkmode")) {
    applyDarkModeStyles();
  } else {
    removeDarkModeStyles();
  }
}

// Apply dark mode styles
function applyDarkModeStyles() {
  let botonSvg = document.getElementById('botonSvg');
  let botonSvg2 = document.getElementById('botonSvg2');
  let carousel = document.querySelector('.carousel');
  let prev = document.querySelector('.carousel-prev');
  let next = document.querySelector('.carousel-next');
  let cuadro = document.querySelector('.cuadroReproductor');

  botonSvg.classList.add("dark-input");
  botonSvg2.classList.add("dark-input");
  carousel.classList.add("dark-borderFoto");
  prev.classList.add("dark-nextPrev");
  next.classList.add("dark-nextPrev");
  cuadro.classList.add("dark-reproductor");
}

// Remove dark mode styles
function removeDarkModeStyles() {
  let botonSvg = document.getElementById('botonSvg');
  let botonSvg2 = document.getElementById('botonSvg2');
  let carousel = document.querySelector('.carousel');
  let prev = document.querySelector('.carousel-prev');
  let next = document.querySelector('.carousel-next');
  let cuadro = document.querySelector('.cuadroReproductor');

  botonSvg.classList.remove("dark-input");
  botonSvg2.classList.remove("dark-input");
  carousel.classList.remove("dark-borderFoto");
  prev.classList.remove("dark-nextPrev");
  next.classList.remove("dark-nextPrev");
  cuadro.classList.remove("dark-reproductor");
}

// Function to initialize dark mode preference on page load
document.addEventListener("DOMContentLoaded", function() {
  const darkModeToggle = document.getElementById('darkModeToggle');

  // Retrieve dark mode preference from localStorage
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  // Update toggle button based on preference
  darkModeToggle.checked = isDarkMode;

  // Apply dark mode if preference is true
  if (isDarkMode) {
    toggleDarkMode();
  }
});

// Function called when dark mode toggle is clicked
function modoOscuroActivacion() {
  toggleDarkMode();
}
