const intro = document.getElementById("intro");
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");

setTimeout(() => {
  intro.classList.add("hidden");

  setTimeout(() => {
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
    go("countdown.html");
  }, 900);
});
