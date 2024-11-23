document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    const mainContent = document.getElementById('main-content');
  
    // Añade un evento de clic a cada enlace
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Previene el comportamiento predeterminado del enlace
  
        // Borra el contenido del main
        mainContent.innerHTML = '';
  
        // Cargar la nueva plantilla basada en la sección
        const seccion = link.getAttribute('href').substring(1); // Obtiene la sección del href
        fetch(`/${seccion}`)
          .then(response => response.text())
          .then(html => {
            mainContent.innerHTML = html; // Carga el nuevo contenido
          })
          .catch(err => console.error('Error al cargar la plantilla:', err));
      });
    });
  });
  