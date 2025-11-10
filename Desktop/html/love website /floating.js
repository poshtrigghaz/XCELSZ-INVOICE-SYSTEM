const container = document.getElementById('floating-container');
const symbols = ['❤️','🌸','🦋']; // hearts, petals, butterflies

function createFloatingElement() {
    const el = document.createElement('div');
    el.classList.add('floating');

    // Random symbol
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    // Random size, position, duration
    const size = Math.random() * 30 + 15; // 15px to 45px
    const left = Math.random() * 100; // 0% to 100%
    const duration = Math.random() * 8 + 5; // 5s to 13s

    el.style.fontSize = `${size}px`;
    el.style.left = `${left}%`;
    el.style.animationDuration = `${duration}s`;

    // Start slightly below the viewport
    el.style.bottom = `${-50}px`;

    container.appendChild(el);

    // Remove element after animation ends
    setTimeout(() => {
        container.removeChild(el);
    }, duration * 1000);
}

// Spawn elements continuously
setInterval(createFloatingElement, 300); // every 0.3s
