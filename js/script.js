// script.js - Lógica JS para la landing page App Colegios

document.addEventListener('DOMContentLoaded', function () {
    // Scroll suave para los enlaces del navbar
    document.querySelectorAll('a.nav-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Validación simple del formulario de contacto
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();
            if (!nombre || !correo || !mensaje) {
                alert('Por favor, completa todos los campos.');
                return;
            }
            // Aquí puedes agregar lógica para enviar el formulario (ej: AJAX)
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
            form.reset();
        });
    }
});
