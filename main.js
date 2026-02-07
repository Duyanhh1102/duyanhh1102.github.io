const confirmBtn = document.querySelector(".confirm-btn");

if (confirmBtn) {
  confirmBtn.addEventListener("click", () => {
    confirmBtn.innerText = "See you soon ✨";
    confirmBtn.style.pointerEvents = "none";
  });
}
