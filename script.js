const pages = document.querySelectorAll(".page");
let current = 0;

pages.forEach((page, index) => {
  page.addEventListener("click", () => {
    if (index === current) {
      page.classList.remove("active");
      current++;
      if (current < pages.length) {
        pages[current].classList.add("active");
      }
    }
  });
});

const acceptBtn = document.getElementById("acceptBtn");
const declineBtn = document.getElementById("declineBtn");
const responseText = document.getElementById("responseText");

function firework() {
  for (let i = 0; i < 30; i++) {
    const dot = document.createElement("span");
    dot.style.left = Math.random() * 100 + "%";
    dot.style.backgroundColor =
      "hsl(" + Math.random() * 360 + ",100%,50%)";
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 2000);
  }
}

acceptBtn.onclick = (e) => {
  e.stopPropagation();
  responseText.textContent =
    "🎉 Cảm ơn rất nhiều! Hãy đến đúng thời gian để cùng lưu lại khoảnh khắc đẹp nhé.";
  firework();
};

declineBtn.onclick = (e) => {
  e.stopPropagation();
  responseText.textContent =
    "🙏 Cảm ơn bạn đã dành chút thời gian đọc lời mời này.";
};
