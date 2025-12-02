// Dropdown Menu Functionality & Mobile Hamburger Menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');
    const navOverlay = document.querySelector('.nav-overlay');
    
    // Mobile Hamburger Menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            if (navOverlay) navOverlay.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', function() {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            navOverlay.classList.remove('active');
        });
    }
    
    // Dropdown functionality
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = toggle.closest('.nav-item-dropdown');
            const menu = parent.querySelector('.dropdown-menu');
            
            // En móviles y tablets (hasta 991px), solo toggle el menú actual
            if (window.innerWidth <= 991) {
                parent.classList.toggle('active');
            } else {
                // En desktop, cerrar otros menús
                document.querySelectorAll('.dropdown-menu').forEach(m => {
                    if (m !== menu) m.classList.remove('active');
                });
                menu.classList.toggle('active');
            }
        });
    });

    // Cerrar menús al hacer clic fuera (solo desktop)
    document.addEventListener('click', (e) => {
        if (window.innerWidth > 991 && !e.target.closest('.nav-item-dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('active'));
        }
    });
});
