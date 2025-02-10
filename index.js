
const glowingText = document.getElementById('glowing-text');
const particlesContainer = document.querySelector('.particles');


glowingText.addEventListener('click', () => {
    glowingText.classList.toggle('active');
});

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
   
    glowingText.style.textShadow = `${mouseX / 50}px ${mouseY / 50}px 20px rgba(255, 255, 255, 0.5)`;
    
  
    createParticle(mouseX, mouseY);
});


function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${x - 3}px`;
    particle.style.top = `${y - 3}px`;
    particlesContainer.appendChild(particle);

   
    setTimeout(() => {
        particlesContainer.removeChild(particle);
    }, 2000);
}
