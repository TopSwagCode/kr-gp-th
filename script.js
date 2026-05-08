
const canvas = document.getElementById('hearts');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiColors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#ffdd59', '#ff6bcb', '#a4de6c', '#ffa502'];

let confetti = [];
for (let i = 0; i < 120; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 3,
        speedY: Math.random() * 2 + 1.5,
        speedX: (Math.random() - 0.5) * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.7 + 0.3,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)]
    });
}

function drawConfetti(x, y, size, rotation, opacity, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.fillStyle = color;
    ctx.globalAlpha = opacity;
    ctx.fillRect(-size / 2, -size / 2, size, size);
    ctx.restore();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let piece of confetti) {
        drawConfetti(piece.x, piece.y, piece.size, piece.rotation, piece.opacity, piece.color);
        piece.y += piece.speedY;
        piece.x += piece.speedX;
        piece.rotation += piece.rotationSpeed;
        
        if (piece.y > canvas.height) {
            piece.y = -10;
            piece.x = Math.random() * canvas.width;
            piece.rotation = Math.random() * Math.PI * 2;
        }
    }
    requestAnimationFrame(animate);
}

animate();
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
