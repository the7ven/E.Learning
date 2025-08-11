
        // Add interactive hover effects
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.student-card');
            
            cards.forEach(card => {
                const originalTransform = getComputedStyle(card).transform;
                
                card.addEventListener('mouseenter', function() {
                    this.style.transform = originalTransform + ' translateY(-15px) scale(1.05)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = originalTransform;
                });
            });

            // Add parallax effect to floating elements
            document.addEventListener('mousemove', function(e) {
                const floatingElements = document.querySelectorAll('.floating-element');
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;

                floatingElements.forEach((element, index) => {
                    const speed = (index + 1) * 0.3;
                    const xMovement = (x - 0.5) * speed * 15;
                    const yMovement = (y - 0.5) * speed * 15;
                    
                    const currentTransform = element.style.transform || '';
                    const baseTransform = currentTransform.replace(/translate\([^)]*\)/g, '');
                    element.style.transform = baseTransform + ` translate(${xMovement}px, ${yMovement}px)`;
                });
            });
        });