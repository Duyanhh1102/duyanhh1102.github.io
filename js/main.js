const intro = document.getElementById("intro");
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");

setTimeout(() => {
  intro.classList.add("hidden");
  setTimeout(() => {
    envelope.classList.remove("hidden");
  }, 2000);
}, 10000);

openBtn.addEventListener("click", () => {
  envelope.style.opacity = "0";
  setTimeout(() => {
    alert("Scene tiếp theo: Lời mời chính sẽ load");
  }, 1500);
});
