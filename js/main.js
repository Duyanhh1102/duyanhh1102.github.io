const intro = document.getElementById("intro");
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");

setTimeout(() => {
  intro.classList.add("hidden");

  setTimeout(() => {
    intro.style.display = "none";   // 🔥 xoá hẳn layer intro
    envelope.classList.remove("hidden");
    envelope.classList.add("active");
  }, 800);

}, 9000);

openBtn.addEventListener("click", () => {
  envelope.classList.add("hidden");

  setTimeout(() => {
    // chuyển scene tiếp theo tại đây
    alert("Scene tiếp theo: Lời mời chính sẽ load");
  }, 900);
});
