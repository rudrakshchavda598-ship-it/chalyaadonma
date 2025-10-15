window.onload = () => {
  const audio = document.getElementById("intro-audio");
  const bubbles = document.querySelectorAll(".bubble");
  const finalMsg = document.getElementById("final-message");
  const openBtn = document.getElementById("open-btn");
  const intro = document.getElementById("intro");
  const sceneContainer = document.getElementById("scene-container");

  // start song automatically
  audio.play().catch(() => console.log("Autoplay may be blocked"));

  // bubble timing
  bubbles.forEach((b, i) => {
    setTimeout(() => b.classList.add("show"), i * 4000);
  });

  // after last bubble
  setTimeout(() => {
    finalMsg.style.display = "block";
  }, bubbles.length * 4000 + 1000);

  // show open button
  setTimeout(() => {
    openBtn.style.display = "inline-block";
  }, bubbles.length * 4000 + 6000);

  // scenes
  const scenes = [
    {
      bg: "linear-gradient(to bottom right, #ffdde1, #ee9ca7)",
      img: "images/mannmohi.jpg",
      msg: "તું હસે ત્યારે દુનિયા રોકાય જાય છે 💖",
      song: "songs/mannmohi.mp3",
    },
    {
      bg: "linear-gradient(to bottom right, #2b5876, #4e4376)",
      img: "images/chaandne.jpg",
      msg: "ચાંદની રાતમાં તારી યાદોનો વરસાદ ☁",
      song: "songs/chaandne.mp3",
    },
    {
      bg: "linear-gradient(to bottom right, #ffecd2, #fcb69f)",
      img: "images/callertune.jpg",
      msg: "તારું નામ સાંભળું એટલે દિલ ધબકવા લાગે 🎵",
      song: "songs/callertune.mp3",
    },
    {
      bg: "linear-gradient(to bottom right, #667db6, #0082c8, #0082c8, #667db6)",
      img: "images/jaggume.jpg",
      msg: "વરસાદની બુંદોમાં તું જ પ્રતિબિંબ છે 💧",
      song: "songs/jaggume.mp3",
    },
    {
      bg: "linear-gradient(to bottom right, #c6ffdd, #fbd786, #f7797d)",
      img: "images/pehlanasha.jpg",
      msg: "પ્રથમ પ્રેમ જેવો લાગણીનો સ્પર્શ 💞",
      song: "songs/pehlanasha.mp3",
    },
  ];

  const scenePhoto = document.getElementById("scene-photo");
  const sceneMsg = document.getElementById("scene-message");
  const sceneBg = document.getElementById("scene-bg");
  const sceneAudio = document.getElementById("scene-audio");

  document.querySelectorAll("#buttons button").forEach(btn => {
    btn.addEventListener("click", () => {
      const sc = scenes[btn.dataset.scene];
      sceneBg.style.backgroundImage = sc.bg;
      scenePhoto.src = sc.img;
      sceneMsg.textContent = sc.msg;
      sceneAudio.src = sc.song;
      sceneAudio.play();
    });
  });

  openBtn.onclick = () => {
    intro.classList.add("hidden");
    sceneContainer.classList.remove("hidden");
  };
};
