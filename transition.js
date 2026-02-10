document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");

  function showPage(id) {
    pages.forEach(p => {
      p.classList.remove("active");
      p.style.display = "none";
    });

    const page = document.getElementById(id);
    if (!page) return;

    page.style.display = "flex";

    requestAnimationFrame(() => {
      page.classList.add("active");
    });
  }

  function smoothSwitch(from, to, delay = 500) {
    const f = document.getElementById(from);
    if (f) f.classList.remove("active");

    setTimeout(() => {
      showPage(to);
    }, delay);
  }

  /* ========== FLOW CHÍNH ========== */

  // Intro → Envelope
  const introBtn = document.getElementById("startBtn");
  if (introBtn) {
    introBtn.onclick = () => smoothSwitch("intro", "envelope", 450);
  }

  // Envelope → Countdown
  const openBtn = document.getElementById("openBtn");
  if (openBtn) {
    openBtn.onclick = () => smoothSwitch("envelope", "countdown", 450);
  }

  // Countdown → Main
  const COUNTDOWN_TIME = 5;
  let time = COUNTDOWN_TIME;

  const counter = document.getElementById("count");
  if (counter) {
    counter.innerText = time;

    const timer = setInterval(() => {
      time--;
      counter.innerText = time;

      if (time <= 0) {
        clearInterval(timer);
        smoothSwitch("countdown", "main", 450);
      }
    }, 1000);
  }
