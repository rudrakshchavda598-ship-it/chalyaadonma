window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  const photos = document.getElementById("photos");
  const chat = document.getElementById("chat");
  const bubbles = document.querySelectorAll(".bubble");
  const ending = document.getElementById("ending");

  // hide all at start
  photos.style.opacity = 0;
  chat.style.opacity = 0;
  bubbles.forEach((b) => (b.style.opacity = 0));
  ending.style.opacity = 0;

  audio.addEventListener("play", () => {
    // ⿡ show photos
    setTimeout(() => {
      photos.style.opacity = 1;
    }, 500);

    // ⿢ show chat container
    setTimeout(() => {
      chat.style.opacity = 1;
    }, 2000);

    // ⿣ show bubbles one by one
    bubbles.forEach((bubble, index) => {
      setTimeout(() => {
        bubble.style.opacity = 1;
      }, 2500 + index * 1500); // fade sequentially
    });

    // ⿤ show ending near end of 40 s
    setTimeout(() => {
      ending.style.opacity = 1;
    }, 38000);
  });

  // fallback if audio doesn’t autoplay
  setTimeout(() => {
    if (ending.style.opacity == 0) ending.style.opacity = 1;
  }, 42000);
});
