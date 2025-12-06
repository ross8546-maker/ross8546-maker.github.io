/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("contactBtn");
  const popup = document.getElementById("contactPopup");
  const close = document.getElementById("popupClose");

  btn.addEventListener("click", () => popup.style.display = "flex");
  close.addEventListener("click", () => popup.style.display = "none");
  popup.addEventListener("click", (e) => { 
    if (e.target === popup) popup.style.display = "none"; 
  });
});



window.addEventListener('touchmove', (e) => {
  e.preventDefault(); // 화면 스크롤 방지

  const touch = e.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;

  // 기존 mousemove 안에서 쓰던 코드 그대로 복붙
  glow.style.left = x + 'px';
  glow.style.top = y + 'px';

  if (lastX === null || lastY === null) {
    lastX = x;
    lastY = y;
    return;
  }

  hue = (hue + 3) % 360;

  ctx.strokeStyle = `hsl(${hue}, 100%, 60%)`;
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();

  lastX = x;
  lastY = y;
});




