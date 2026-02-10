const intro = document.getElementById("intro");
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");

setTimeout(() => {
  intro.classList.add("hidden");

  setTimeout(() => {
    // DIỆT HẲN LAYER INTRO -> KHÔNG CÒN CHẶN CLICK
    intro.style.display = "none";
    intro.style.pointerEvents = "none";
    intro.style.zIndex = "-1";

    envelope.classList.remove("hidden");
    envelope.classList.add("active");
  }, 800);

}, 9000);

openBtn.addEventListener("click", () => {
  envelope.classList.add("hidden");

  setTimeout(() => {
    // chuyển scene tiếp theo tại đây
    window.location.href = "countdown.html";
  }, 900);
});
