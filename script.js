let current = 0;
const pages = document.querySelectorAll(".page");

function showPage(index) {
  pages.forEach((p, i) => {
    p.classList.toggle("active", i === index);
  });
}

function nextPage() {
  if (current < pages.length - 1) {
    current++;
    showPage(current);
  }
}

function prevPage() {
  if (current > 0) {
    current--;
    showPage(current);
  }
}

function accept() {
  nextPage();
  launchFireworks();
}

function decline() {
  alert("Cảm ơn bạn đã dành thời gian đọc lời mời này 💙");
}

/* ⏰ Đếm ngược */
const target = new Date("2026-03-01T00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;
  if (diff > 0) {
    const d = Math.floor(diff / (1000*60*60*24));
    document.getElementById("countdown").innerText =
      `Còn ${d} ngày nữa là tới ngày chụp`;
  }
}, 1000);

/* 🎆 Pháo hoa */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function launchFireworks() {
  for (let i = 0; i < 80; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI*2);
    ctx.fill();
  }
  setTimeout(() => ctx.clearRect(0,0,canvas.width,canvas.height), 1500);
}
