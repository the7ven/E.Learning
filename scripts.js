
    function toggleMenu() {
            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.querySelector('.mobile-menu');
            
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        }
        
        function closeMenu() {
            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.querySelector('.mobile-menu');
            
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
        
        // Fermer le menu en cliquant ailleurs
        document.addEventListener('click', function(event) {
            const navbar = document.querySelector('.navbar');
            if (!navbar.contains(event.target)) {
                closeMenu();
            }
        });