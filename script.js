window.addEventListener("DOMContentLoaded", () => {
  const bubbles = document.querySelectorAll(".bubble");
  bubbles.forEach(bubble => bubble.style.display = "none"); // hide all at first

  const audio = document.getElementById("bg-music");
  let index = 0;

  function showNextBubble() {
    if (index < bubbles.length) {
      bubbles[index].style.display = "inline-block";
      bubbles[index].style.opacity = 0;
      bubbles[index].style.transition = "opacity 1s ease";
      setTimeout(() => (bubbles[index].style.opacity = 1), 50);
      index++;
      setTimeout(showNextBubble, 4000); // delay before showing next bubble
    }
  }

  // Wait for audio to start
  audio.addEventListener("play", () => {
    setTimeout(showNextBubble, 2000);
  });
});
