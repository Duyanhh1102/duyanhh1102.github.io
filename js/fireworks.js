const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function startFireworks() {
  setInterval(() => {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    for (let i = 0; i < 80; i++) {
      particles.push({
        x, y,
        vx: Math.cos(i) * Math.random() * 4,
        vy: Math.sin(i) * Math.random() * 4,
        life: 100
      });
    }
  }, 800);
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.05;
    p.life--;
    ctx.fillStyle = "gold";
    ctx.fillRect(p.x,p.y,2,2);
  });
  particles = particles.filter(p=>p.life>0);
  requestAnimationFrame(animate);
}
animate();
