window.addEventListener("load", () => {
  const music = document.getElementById("bgm");
  setTimeout(() => {
    music?.play().catch(() => {});
  }, 600);
});

document.getElementById("openBtn").addEventListener("click", () => {
  document.body.classList.add("page-exit");
  setTimeout(() => {
    window.location.href = "invite.html";
  }, 800);
});
