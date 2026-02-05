const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

function launchFireworks(big = false) {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for (let i = 0; i < (big ? 80 : 40); i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height/2;
    ctx.fillStyle = "rgba(255,215,150,0.8)";
    ctx.beginPath();
    ctx.arc(x,y,Math.random()*3+2,0,Math.PI*2);
    ctx.fill();
  }
}
