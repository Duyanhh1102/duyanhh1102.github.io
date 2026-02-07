const confirmBtn = document.querySelector(".confirm-btn");
const inviteContent = document.querySelector(".invite-content");

if (confirmBtn) {
  confirmBtn.addEventListener("click", () => {
    inviteContent.innerHTML = `
      <p class="line big">Hẹn gặp lại nhé ✨</p>
      <p class="line">Cảm ơn vì đã dành thời gian cho buổi hẹn này.</p>
      <p class="line">Chúc bạn một ngày thật dịu dàng.</p>
    `;
  });
}
