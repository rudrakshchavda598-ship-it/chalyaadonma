// 🌸 Chat for index.html
const conversation = [
  { sender: "you", text: "Hi boondikiladoo me odkhe che? 💕" },
  { sender: "her", text: "Tu to maara robin jevo lage che 😳💗" },
  { sender: "you", text: "Ha tu maro robin 6 chu, tu ketli saras lage che. Nani hati tyre mne tu bau game che 💞" },
  { sender: "her", text: "Aww, mane pan tu bau yaad ave che. 💕" },
  { sender: "final", text: "ચાલો હવે પ્રેમની સફર શરૂ કરીએ 💖" }
];

const chatBox = document.querySelector(".chat-box");
const openButton = document.querySelector(".open-btn");

if (openButton) {
  openButton.addEventListener("click", () => {
    chatBox.innerHTML = "";
    openButton.disabled = true;
    let index = 0;

    function showNext() {
      if (index < conversation.length) {
        const msg = document.createElement("div");
        msg.classList.add("bubble", conversation[index].sender);
        msg.textContent = conversation[index].text;
        chatBox.appendChild(msg);
        chatBox.scrollTop = chatBox.scrollHeight;

        // Animation
        msg.style.opacity = 0;
        msg.style.transform =
          conversation[index].sender === "you"
            ? "translateX(-50px)"
            : "translateX(50px)";
        setTimeout(() => {
          msg.style.opacity = 1;
          msg.style.transform = "translateX(0)";
        }, 100);

        index++;
        setTimeout(showNext, 2000);
      }
    }

    showNext();

    // Open love.html after conversation ends
    setTimeout(() => {
      window.location.href = "love.html";
    }, 12000);
  });
}

// 🌸 Seasons of Love (love.html)
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".buttons button");
  if (!buttons.length) return;

  const scenes = {
    "Pehla Nasha": {
      img: "images/pehla.jpg",
      text: "Pehla nasha pehla khumar... tu male ane duniya sundar lage 💖",
      song: "songs/pehla.mp3",
      bg: "linear-gradient(135deg, #ffd6e0, #fbb1bd)"
    },
    "Jag Ghoomeya": {
      img: "images/jag.jpg",
      text: "Jag ghoomeya thare jaisa na koi... 💕",
      song: "songs/jag.mp3",
      bg: "linear-gradient(135deg, #d6e0ff, #fbc2eb)"
    },
    "Chaand Ne Kaho": {
      img: "images/chaand.jpg",
      text: "Chaand ne kaho ke aaje thodu vadhu chamke 💞",
      song: "songs/chaand.mp3",
      bg: "linear-gradient(135deg, #b8e0d2, #ffd6e0)"
    },
    "Mann Mohi Gayu": {
      img: "images/mann.jpg",
      text: "Mann mohi gayu vaatoh... tu mari khushbu 💗",
      song: "songs/mann.mp3",
      bg: "linear-gradient(135deg, #ffe6e6, #e6ccff)"
    },
    "Caller Tune": {
      img: "images/caller.jpg",
      text: "Tari caller tune sambhalu ane dil dhadke 🎵💕",
      song: "songs/caller.mp3",
      bg: "linear-gradient(135deg, #ffecd2, #fcb69f)"
    }
  };

  const sceneContainer = document.createElement("div");
  sceneContainer.classList.add("scene");
  document.body.appendChild(sceneContainer);

  const message = document.createElement("div");
  message.classList.add("message");
  sceneContainer.appendChild(message);

  const audio = new Audio();

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.textContent.trim();
      const s = scenes[choice];
      if (!s) return;

      document.body.style.background = s.bg;
      sceneContainer.innerHTML = <img src="${s.img}" alt="${choice}" class="scene-img">;
      message.textContent = s.text;
      sceneContainer.appendChild(message);

      audio.src = s.song;
      audio.play();
    });
  });
});