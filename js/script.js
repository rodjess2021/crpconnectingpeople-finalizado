console.log("script.js cargado");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - 80; // Ajustar según altura navbar
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('load', () => {
  const splashScreen = document.getElementById('splash-screen');
  setTimeout(() => {
    splashScreen.style.opacity = '0';
    splashScreen.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
      splashScreen.style.display = 'none';
      iniciarScrollReveal();
    }, 500);
  }, 2000);
});

function iniciarScrollReveal() {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  const scrollRevealConfigLeft = {
    origin: 'left',
    distance: isMobile ? '50px' : '100px',
    duration: 800,
    delay: 200,
    reset: !isMobile,
    once: isMobile // Aplica solo una vez en móviles
  };

  const scrollRevealConfigRight = {
    origin: 'right',
    distance: isMobile ? '50px' : '100px',
    duration: 800,
    delay: 200,
    reset: !isMobile,
    once: isMobile
  };

  ScrollReveal().reveal('.slide-in-left', scrollRevealConfigLeft);
  ScrollReveal().reveal('.slide-in-right', scrollRevealConfigRight);

  ScrollReveal().reveal('.team-section-title', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: !isMobile,
    once: isMobile
  });

  ScrollReveal().reveal('.team-section-paragraph', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 400,
    reset: !isMobile,
    once: isMobile
  });

  ScrollReveal().reveal('.contact-title', {
    origin: 'left',
    distance: '70px',
    duration: 1000,
    delay: 200,
    reset: !isMobile,
    once: isMobile
  });

  ScrollReveal().reveal('.contact-paragraph', {
    origin: 'left',
    distance: '70px',
    duration: 1000,
    delay: 400,
    reset: !isMobile,
    once: isMobile
  });

  ScrollReveal().reveal('.contact-form', {
    origin: 'right',
    distance: '70px',
    duration: 1000,
    delay: 600,
    reset: !isMobile,
    once: isMobile
  });
}

// Función para configurar ScrollReveal según el tamaño de la pantalla
function applyScrollReveal() {
  const isMobile = window.innerWidth <= 767;

  ScrollReveal().reveal('.hero-text h1', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      interval: 300, // Retraso incremental para animación secuencial
      reset: !isMobile, // Repite la animación solo en desktop
      once: isMobile    // En móviles, solo se muestra una vez
  });
}

// Ejecutar ScrollReveal al cargar la página
applyScrollReveal();

// Vuelve a aplicar configuración si la ventana cambia de tamaño (para desktop y móvil)
window.addEventListener('resize', applyScrollReveal);

function applyScrollReveal() {
  const isMobile = window.innerWidth <= 767;

  ScrollReveal().reveal('.hero-text h1', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      interval: 300, // Retraso incremental para animación secuencial
      reset: !isMobile, // Repite la animación en dispositivos móviles también
      once: false       // Aplica la animación siempre, incluso en móvil
  });
}
