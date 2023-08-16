const key = Array.from(document.querySelectorAll(".key"));

key.forEach((item) => {
  const dataKeyValue = item.getAttribute("data-key");
  item.addEventListener("transitionend", (e) => {
    item.classList.remove("playing");
  });
  item.addEventListener("pointerdown", (e) => {
    const audio = document.querySelector(`audio[data-key="${dataKeyValue}"]`);
    item.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  });
});
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}`);
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}
window.addEventListener("keydown", playSound);
