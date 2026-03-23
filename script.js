// ============================================
// INTERACTIVIDAD Y FUNCIONALIDADES
// ============================================

// Menu toggle para dispositivos móviles
const menuToggle = document.getElementById('menuToggle');
const navbar = document.querySelector('.navbar');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
}

// Validación y envío del formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obtener datos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validación simple
        if (!name || !email || !subject || !message) {
            alert('Por favor, completa todos los campos requeridos.');
            return;
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un email válido.');
            return;
        }
        
        // Mostrar mensaje de éxito
        alert(`¡Gracias ${name}! Tu mensaje ha sido enviado exitosamente. Nos pondremos en contacto pronto.`);
        
        // Enviar datos (simulado, en producción se enviaría a un servidor)
        console.log({
            name,
            email,
            phone: document.getElementById('phone').value,
            subject,
            message,
            timestamp: new Date()
        });
        
        // Limpiar formulario
        contactForm.reset();
    });
}

// Newsletter subscription
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        if (!email) {
            alert('Por favor, ingresa tu email.');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un email válido.');
            return;
        }
        
        alert(`¡Gracias! Te hemos suscrito a nuestro newsletter con ${email}`);
        newsletterForm.reset();
    });
}

// Animación de scroll suave (mejorar experiencia)
document.addEventListener('DOMContentLoaded', () => {
    // Agregar animaciones a elementos cuando se scrollea
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar todos los cards
    document.querySelectorAll('.product-card, .benefit-card, .promo-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});

// Agregar clase activa al menú según la sección visible
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        const scroll = window.scrollY;
        
        if (scroll >= top && scroll < bottom) {
            const id = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
            
            if (navLink) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.style.borderBottom = '3px solid transparent';
                });
                navLink.style.borderBottom = '3px solid #ff9800';
            }
        }
    });
});

// Función para agregar productos al carrito (ejemplo básico)
const addToCartButtons = document.querySelectorAll('.cta-secondary');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        
        // Simulación de agregar al carrito
        console.log(`Producto agregado: ${productName} - ${productPrice}`);
        
        // Efecto visual
        button.textContent = '✓ Añadido';
        button.style.background = '#4CAF50';
        
        setTimeout(() => {
            button.textContent = 'Añadir al Carrito';
            button.style.background = '';
        }, 2000);
    });
});

// Efecto parallax en hero image (opcional)
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const scrollPosition = window.scrollY;
        heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});
