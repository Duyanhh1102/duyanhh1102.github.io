let audio;

function playMusic() {
  if (!audio) {
    audio = new Audio("audio/piano.mp3");
    audio.volume = 0.7;
    audio.play();
  }
}
