// Smooth page transition
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.innerHTML = `
    body{
      opacity:0;
      transition:opacity .6s ease;
    }
    body.loaded{
      opacity:1;
    }
    body.fade-out{
      opacity:0;
    }
  `;
  document.head.appendChild(style);
  requestAnimationFrame(()=>document.body.classList.add("loaded"));
});

document.addEventListener("click", e => {
  const link = e.target.closest("a, [data-link]");
  if(!link) return;

  e.preventDefault();
  const url = link.href || link.dataset.link;

  document.body.classList.add("fade-out");
  setTimeout(()=>{
    window.location.href = url;
  },450);
});
