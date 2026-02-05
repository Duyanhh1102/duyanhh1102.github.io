fetch("data/invitation.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("accept").onclick = () => {
      showResult(data.accept, true);
    };
    document.getElementById("decline").onclick = () => {
      showResult(data.decline, false);
    };
  });

function showResult(text, fireworks) {
  document.getElementById("result").scrollIntoView({behavior:"smooth"});
  document.getElementById("resultContent").innerText = text;
  if (fireworks) startFireworks();
}
