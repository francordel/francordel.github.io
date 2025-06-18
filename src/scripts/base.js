document.addEventListener('DOMContentLoaded', () => {

  // Función para manejar el menú hamburguesa
  const toggleButton = document.querySelector('.menu-toggle');
  const navRight = document.querySelector('.navigation-right');
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.navigation-right a');

  function handleMenuToggle() {
    toggleButton.addEventListener('click', () => {
      navRight.classList.toggle('active');
      header.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navRight.classList.remove('active');
        header.classList.remove('active');
      });
    });
  }


  // Función para alternal el modo claro y oscuro
  const switchControl = document.querySelector('.ui-switch input[type="checkbox"]');
  const html = document.documentElement;

  function switchDarkLightMode(){
  
      html.setAttribute('data-theme', 'dark');
      switchControl.checked = false;
  
      switchControl.addEventListener('change', () => {
          if (switchControl.checked) {
              html.setAttribute('data-theme', 'light');
          } else {
              html.setAttribute('data-theme', 'dark');
          }
      });
  }

  // Función para el desplazamiento suave y ajustado a secciones usando Lenis
  const headerHeight = header.offsetHeight; 

  function handleSmoothScrollWithLenis() {
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          const offset = (targetId === '#about-me') ? 200 : -headerHeight - 50;
          window.dispatchEvent(new CustomEvent('lenis-scroll', {
            detail: {
              target: targetSection,
              offset: offset
            }
          }));
        }
      });
    });
  }

  // Función para cambiar el estado activo de los enlaces al hacer scroll
  const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));

  function changeLinkState() {
    function updateActiveLink() {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let index = sections.findIndex((section, idx) => {
        const rect = section.getBoundingClientRect();
        const nextRect = sections[idx + 1] ? sections[idx + 1].getBoundingClientRect() : null;
        return (rect.top + window.scrollY <= scrollPosition) && (!nextRect || nextRect.top + window.scrollY > scrollPosition);
      });

      navLinks.forEach(link => link.classList.remove('active-link'));
      if (index !== -1 && navLinks[index]) {
        navLinks[index].classList.add('active-link');
      }
    }

    updateActiveLink();
    window.addEventListener('scroll', updateActiveLink);
  }

  // Listener global para eventos lenis-scroll
  document.addEventListener('lenis-scroll', (e) => {
    const { target, offset } = e.detail;
    const top = target.getBoundingClientRect().top + window.scrollY + offset;
    window.lenis.scrollTo(top);
  });

  // Ejecutar funciones
  handleMenuToggle();
  handleSmoothScrollWithLenis();
  changeLinkState();
  switchDarkLightMode();
});


