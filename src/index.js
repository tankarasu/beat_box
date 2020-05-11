import "./styles.css";

const keys = Array.from(document.querySelectorAll(".key"));

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return;
  key.classList.add("playing");

  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  e.target.classList.remove("playing");
}

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
