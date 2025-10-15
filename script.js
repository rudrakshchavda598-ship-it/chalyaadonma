const bgMusic = document.getElementById("bgMusic");
const intro = document.getElementById("intro");
const main = document.getElementById("main");
const scene = document.getElementById("scene");
const gujjuText = document.getElementById("gujjuText");
const openBtn = document.getElementById("openBtn");
const messages = document.querySelectorAll(".message");
const finalLine = document.querySelector(".final-line");

let currentAudio = null;

// Conversation animation timing
function playConversation() {
  bgMusic.play();
  bgMusic.volume = 0.6;

  messages.forEach((msg, index) => {
    setTimeout(() => {
      msg.style.opacity = "1";
    }, index * 4000);
  });

  // After all messages
  setTimeout(() => {
    finalLine.style.opacity = "1";
  }, messages.length * 4000 + 1500);

  // Show open button at end
  setTimeout(() => {
    openBtn.classList.remove("hidden");
    bgMusic.pause();
  }, 40000);
}

playConversation();

openBtn.addEventListener("click", () => {
  intro.classList.add("hidden");
  main.classList.remove("hidden");
});

// Button scenes
const scenes = {
  Phooldi: { img: "images/mann.jpg", song: "songs/mann.mp3", text: "તું હસે ત્યાં દુનિયા હસે જાય છે 💖" },
  Chandali: { img: "images/chaand.jpg", song: "songs/chaand.mp3", text: "ચાંદની રાતમાં તારી યાદોનો વરસાદ ☁" },
  Golu: { img: "images/caller.jpg", song: "songs/caller.mp3", text: "તારા નામ સાંભળું એજ હૃદય ધબકતા વાગે 🎵" },
  Diludi: { img: "images/jag.jpg", song: "songs/jag.mp3", text: "એ આંખો યે તો દિલની ભાષા કહે છે 💧" },
  Boondkiladoo: { img: "images/pehla.jpg", song: "songs/pehla.mp3", text: "પહેલો પ્રેમ એટલે તારી યાદની સુગંધ 💋" }
};

function showScene(name) {
  const s = scenes[name];
  if (!s) return;
  scene.src = s.img;
  gujjuText.textContent = s.text;
  if (currentAudio) currentAudio.pause();
  currentAudio = new Audio(s.song);
  currentAudio.play();
}
