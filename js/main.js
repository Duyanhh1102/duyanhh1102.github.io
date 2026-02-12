function initIntro() {
  const intro = document.getElementById("intro");
  const envelope = document.getElementById("envelope");
  const openBtn = document.getElementById("openBtn");

  // CHỐNG LỖI: nếu chưa load xong HTML thì dừng
  if (!intro || !envelope || !openBtn) return;

  setTimeout(() => {
    intro.classList.add("hidden");

    setTimeout(() => {
      // DIỆT HẲN LAYER INTRO
      intro.style.display = "none";
      intro.style.pointerEvents = "none";
      intro.style.zIndex = "-1";

      envelope.classList.remove("hidden");
      envelope.classList.add("active");
    }, 800);

  }, 9000);

  openBtn.onclick = () => {
    envelope.classList.add("hidden");

    setTimeout(() => {
      go("countdown.html");
    }, 900);
  };
}

// TỰ ĐỘNG KIỂM TRA KHI HTML ĐƯỢC LOAD
const waitIntro = setInterval(() => {
  if (document.getElementById("intro")) {
    clearInterval(waitIntro);
    initIntro();
  }
}, 50);
