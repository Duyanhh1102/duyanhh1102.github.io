const pages = document.querySelectorAll(".page");
const book = document.getElementById("book");
const overlay = document.querySelector(".overlay");

let current = 0;

function showPage(i) {
  pages.forEach((p, idx) => {
    p.classList.toggle("active", idx === i);
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

/* PHÁO HOA */
function launchFireworks() {
  for (let i = 0; i < 30; i++) {
    const spark = document.createElement("div");
    spark.style.position = "fixed";
    spark.style.left = "50%";
    spark.style.top = "50%";
    spark.style.width = "6px";
    spark.style.height = "6px";
    spark.style.borderRadius = "50%";
    spark.style.background = `hsl(${Math.random()*360},100%,60%)`;
    spark.style.transform = `translate(${Math.random()*400-200}px, ${Math.random()*400-200}px)`;
    spark.style.transition = "1s";
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 1000);
  }
}

function accept() {
  book.classList.add("shake");
  overlay.classList.add("flash");

  setTimeout(() => {
    launchFireworks();
    document.getElementById("thanksText").innerHTML =
      "Cảm ơn rất nhiều 💖<br>Hẹn gặp bạn đúng ngày 01/03/2026!";
    current = pages.length - 1;
    showPage(current);
  }, 500);

  setTimeout(() => {
    book.classList.remove("shake");
    overlay.classList.remove("flash");
  }, 1000);
}

function decline() {
  document.getElementById("thanksText").innerHTML =
    "Cảm ơn bạn đã dành thời gian đọc lời mời này 💙";
  current = pages.length - 1;
  showPage(current);
}
