const music = document.getElementById("bg-music");
const enterBtn = document.querySelector(".enter-btn");
const intro = document.querySelector(".intro");

/* Fade in nhạc nền */
window.addEventListener("load", () => {
  music.volume = 0;
  music.play().catch(()=>{});

  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.6) {
      vol += 0.01;
      music.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 50);
});

/* Click → fade out + chuyển cảnh */
enterBtn.addEventListener("click", () => {
  intro.style.transition = "1.5s";
  intro.style.opacity = 0;

  let vol = music.volume;
  const fadeOut = setInterval(() => {
    if (vol > 0) {
      vol -= 0.02;
      music.volume = vol;
    } else {
      clearInterval(fadeOut);
      window.location.href = "invite.html";
    }
  }, 50);
});
