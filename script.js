window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  const photos = document.getElementById("photos");
  const bubbles = document.querySelectorAll(".bubble");
  const ending = document.getElementById("ending");

  // hide all at start
  photos.style.opacity = 0;
  bubbles.forEach((b) => (b.style.opacity = 0));
  ending.style.opacity = 0;

  // When song starts
  audio.addEventListener("play", () => {
    // 1. show photos
    setTimeout(() => {
      photos.style.opacity = 1;
    }, 500);

    // 2. show bubbles one-by-one (each after ~1.5s)
    bubbles.forEach((bubble, index) => {
      setTimeout(() => {
        bubble.style.opacity = 1;
      }, 2500 + index * 1500); // total ~35s for all
    });

    // 3. show ending near end of song (~38s)
    setTimeout(() => {
      ending.style.opacity = 1;
    }, 38000);
  });

  // safety fallback (if audio fails)
  setTimeout(() => {
    ending.style.opacity = 1;
  }, 40000);
});
