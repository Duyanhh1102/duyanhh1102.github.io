let current = 0;

function showScene(i) {
  document.querySelectorAll(".scene").forEach(s => s.classList.remove("active"));
  document.getElementById(`scene-${i}`).classList.add("active");
  current = i;
}

function openInvitation() {
  playMusic();
  showScene(1);
  launchFireworks();
  setTimeout(() => showScene(2), 3000);
  setTimeout(() => showScene(3), 6000);
}

function acceptInvite() {
  launchFireworks(true);
  document.getElementById("final-text").innerText =
    "Cảm ơn bạn rất nhiều.\nHẹn gặp bạn đúng thời gian và địa điểm.";
  showScene(4);
}

function declineInvite() {
  document.getElementById("final-text").innerText =
    "Cảm ơn bạn đã dành thời gian đọc lời mời này.";
  showScene(4);
}
