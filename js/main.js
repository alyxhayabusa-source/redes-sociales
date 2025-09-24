// Configuración de AOS (Animaciones)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Efecto de máquina de escribir
function initTyped() {
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: ['Ulises', 'un Streamer', 'un Gamer', 'un tecnico programador'],
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            shuffle: false,
            smartBackspace: true
        });
    }
}

// Función para scroll suave a cualquier sección
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Función para manejar el botón de volver arriba
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Efecto de seguimiento del ratón en las tarjetas de redes sociales
function initMouseFollowEffect() {
    const cards = document.querySelectorAll('.social-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
        
        // Resetear la posición al salir del card
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--mouse-x', '0px');
            card.style.setProperty('--mouse-y', '0px');
        });
    });
}

// Cargar partículas de fondo
function initParticles() {
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Pantalla de carga
function initLoadingScreen() {
    const loading = document.querySelector('.loading');
    if (!loading) return;

    // Simular tiempo de carga
    setTimeout(() => {
        loading.classList.add('fade-out');
        
        // Eliminar el elemento después de la animación
        setTimeout(() => {
            loading.remove();
        }, 500);
    }, 1500);
}

// Animación de fade-in al aparecer en pantalla
function initFadeInOnScroll() {
    const elements = document.querySelectorAll('.animate-fade-in');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    elements.forEach(el => {
        el.classList.remove('visible');
        observer.observe(el);
    });
}

// Inicializar todo cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    initTyped();
    initBackToTop();
    initMouseFollowEffect();
    initParticles();
    initLoadingScreen();
    initFadeInOnScroll();

    // Configurar el evento de clic para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            if (target !== '#') {
                smoothScrollTo(target);
            }
        });
    });

    // Configurar el evento de clic para el botón de explorar
    const exploreBtn = document.querySelector('.explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            smoothScrollTo('#social');
        });
    }

    // Configurar el evento de clic para el indicador de desplazamiento
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            smoothScrollTo('#social');
        });
    }
});

// Manejar el evento de redimensionamiento de la ventana
window.addEventListener('resize', () => {
    // Recalcular alturas si es necesario
});

// Manejar el evento de carga de la ventana
window.addEventListener('load', () => {
    // Asegurarse de que todo esté completamente cargado
    document.body.classList.add('loaded');
});
