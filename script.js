// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openButton");
  const bgMusic = document.getElementById("bgMusic");

  // Start music
  bgMusic.volume = 0.5;
  bgMusic.play().catch(() => {
    console.log("Autoplay blocked, click anywhere to start music.");
  });

  // Go to love page when clicked
  openBtn.addEventListener("click", () => {
    window.location.href = "love.html";
  });
});
