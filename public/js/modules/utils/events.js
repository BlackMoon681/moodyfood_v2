export const setupEventListeners = () => {
    // Cookie consent handling
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookies = document.getElementById('accept-cookies');
    
    if (cookieConsent && !localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'block';
        
        acceptCookies?.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieConsent.style.display = 'none';
        });
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.navbar-toggler');
    const mobileMenu = document.querySelector('.navbar-collapse');
    
    mobileMenuToggle?.addEventListener('click', () => {
        mobileMenu?.classList.toggle('show');
    });

    // Close mobile menu on click outside
    document.addEventListener('click', (e) => {
        if (mobileMenu?.classList.contains('show') && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuToggle?.contains(e.target)) {
            mobileMenu.classList.remove('show');
        }
    });
};