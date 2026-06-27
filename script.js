/**
 * YTFL Portfolio Interactive Features
 * - 3D card tilt effect
 * - Custom red petal particle background system
 */

document.addEventListener('DOMContentLoaded', () => {
    init3DTilt();
    initParticles();
    initScrollSpy();
});

/* --- 3D Tilt Effect --- */
function init3DTilt() {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            
            // Calculate mouse position relative to the card center
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Normalize values (between -1 and 1)
            const normalizedX = x / (rect.width / 2);
            const normalizedY = y / (rect.height / 2);
            
            // Tilt coefficients (max rotation degrees)
            const maxTilt = 8;
            const rotateX = -normalizedY * maxTilt;
            const rotateY = normalizedX * maxTilt;
            
            // Apply transformations
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            
            // Update glow direction
            const angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
            card.style.setProperty('--glow-angle', `${angle}deg`);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
            card.style.transition = 'transform 0.5s ease';
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    });
}

/* --- Falling Petals Particle System --- */
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    const maxParticles = 30;
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    class Petal {
        constructor() {
            this.reset();
            this.y = Math.random() * canvas.height; // Spread initially
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = -20;
            this.size = Math.random() * 8 + 6;
            this.speedY = Math.random() * 1 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 2 - 1;
            this.opacity = Math.random() * 0.4 + 0.2;
            this.sway = 0;
            this.swaySpeed = Math.random() * 0.02 + 0.01;
            this.swayAmplitude = Math.random() * 1.5 + 0.5;
        }
        
        update() {
            this.y += this.speedY;
            this.sway += this.swaySpeed;
            this.x += this.speedX + Math.sin(this.sway) * this.swayAmplitude;
            this.rotation += this.rotationSpeed;
            
            // Reset if goes off screen
            if (this.y > canvas.height + 20 || this.x < -20 || this.x > canvas.width + 20) {
                this.reset();
            }
        }
        
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.beginPath();
            
            // Draw a red petal shape (skews an ellipse)
            ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, 2 * Math.PI);
            
            // Use gradient to make petals look organic
            const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
            gradient.addColorStop(0, `rgba(225, 29, 72, ${this.opacity})`); // Neon Crimson
            gradient.addColorStop(0.8, `rgba(159, 18, 57, ${this.opacity * 0.8})`); // Darker Crimson
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.restore();
        }
    }
    
    // Instantiate particles
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Petal());
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

/* --- Scroll Spy for Active Navigation Links --- */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    function scrollSpy() {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 150; // offset for sticky header height
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', scrollSpy);
    // Trigger scroll spy on init to highlight default active section
    scrollSpy();
}
