const intro = document.getElementById("intro");
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");

function showScene(scene) {
  document.querySelectorAll(".scene").forEach(s => {
    s.classList.add("hidden");
    s.classList.remove("active");
  });

  scene.classList.remove("hidden");
  scene.classList.add("active");
}

// intro → envelope
setTimeout(() => {
  showScene(envelope);
}, 8000);

// click mở thư
openBtn.addEventListener("click", () => {
  envelope.classList.add("hidden");

  setTimeout(() => {
    alert("Scene tiếp theo: Lời mời chính sẽ load");
  }, 800);
});
