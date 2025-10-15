window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  const photos = document.getElementById("photos");
  const chat = document.getElementById("chat");
  const bubbles = document.querySelectorAll(".bubble");
  const ending = document.getElementById("ending");

  // Hide all initially
  photos.style.opacity = 0;
  chat.style.opacity = 0;
  bubbles.forEach((b) => {
    b.style.opacity = 0;
    b.style.transform = "translateY(20px)";
  });
  ending.style.opacity = 0;

  // When song starts
  audio.addEventListener("play", () => {
    // ⿡ show photos
    setTimeout(() => {
      photos.style.opacity = 1;
    }, 500);

    // ⿢ show chat
    setTimeout(() => {
      chat.style.opacity = 1;
    }, 2000);

    // ⿣ show each bubble (slide + fade)
    bubbles.forEach((bubble, index) => {
      setTimeout(() => {
        bubble.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        bubble.style.opacity = 1;
        bubble.style.transform = "translateY(0)";
      }, 2500 + index * 1500);
    });

    // ⿤ show ending text and button
    setTimeout(() => {
      ending.style.opacity = 1;
    }, 38000);
  });

  // Fallback if audio doesn’t autoplay
  setTimeout(() => {
    if (ending.style.opacity == 0) ending.style.opacity = 1;
  }, 42000);
});
