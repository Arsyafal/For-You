let replyIndex = 0;
let contentPlayed = false;

const now = new Date();
const isBirthday = now.getDate() === 30 && now.getMonth() === 6; // 30 Juli

// === COUNTDOWN JIKA BELUM 30 JULI ===
// Aktifkan bagian ini jika ingin countdown muncul sebelum hari-H
/*
if (!isBirthday) {
  document.body.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center;font-family:Poppins,sans-serif;">
      <h1 style="font-size:1.8rem;">⏳ Menuju 30 Juli</h1>
      <div id="countdown" style="font-size:2rem;font-weight:bold;margin-top:10px;"></div>
      <p style="margin-top:20px;">Tunggu ya, Yusrina 😊</p>
    </div>
  `;

  const countdownEl = document.getElementById("countdown");

  function updateCountdown() {
    const target = new Date(now.getFullYear(), 6, 30); // 30 Juli
    const diff = target - new Date();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    countdownEl.textContent = `${days}h ${hours}j ${minutes}m ${seconds}d`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
} else {
*/

function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const messageText = input.value.trim();

  if (messageText !== "") {
    // Tambah pesan user
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user", "fade-in");
    userMessage.textContent = messageText;
    chatBox.appendChild(userMessage);

    setTimeout(() => {
      const botReply = document.createElement("div");
      botReply.classList.add("message", "bot", "fade-in");

      const replyText = getBotReply();
      botReply.textContent = replyText;
      chatBox.appendChild(botReply);
      chatBox.scrollTop = chatBox.scrollHeight;

      // Tampilkan video jika semua balasan selesai
      if (!contentPlayed && replyIndex >= replies.length) {
        contentPlayed = true;

        setTimeout(() => {
          const videoMessage = document.createElement("div");
          videoMessage.classList.add("message", "bot", "fade-in");

          const videoWrapper = document.createElement("div");
          videoWrapper.classList.add("video-wrapper");

          const iframe = document.createElement("iframe");
          iframe.src =
            "https://www.youtube.com/embed/OqsM5kQYjTc?autoplay=1&mute=0&enablejsapi=1";
          iframe.width = "100%";
          iframe.height = "200";
          iframe.frameBorder = "0";
          iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
          iframe.allowFullscreen = true;

          videoWrapper.appendChild(iframe);
          videoMessage.appendChild(videoWrapper);

          const confetti = document.createElement("div");
          confetti.classList.add("confetti");
          confetti.textContent = "🎊🎊🎊";

          videoMessage.appendChild(confetti);
          chatBox.appendChild(videoMessage);
          chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
      }
    }, 900);

    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = "";
  }
}

function handleKey(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
}

function toggleDark() {
  document.body.classList.toggle("dark");
}

// === Daftar Balasan Bot ===
const replies = [
  "Halo beeee 😊",
  "Hari ini ulang tahunmu ya…",
  "Aku tahu, mungkin udah nggak banyak hal yang bisa aku sampein sekarang.",
  "Tapi yang jelas, aku tetap ingin kamu bahagia. Sepenuhnya.",
  "Kamu adalah salah satu orang paling dewasa dan kuat yang pernah aku kenal.",
  "Aku banyak belajar, dan diam-diam… aku masih kagum.",
  "Aku sadar, aku pernah salah karena terlalu cepat menilai.",
  "Andai waktu bisa diulang, mungkin aku bakal lebih banyak dengerin kamu… bukan orang lain.",
  "Aku sempat kehilangan arah, dan jujur aja, aku banyak nyesel.",
  "Tapi dari semua itu, kamu adalah pelajaran paling berharga buat aku.",
  "Terima kasih pernah jadi bagian dari proses tumbuhku.",
  "Maaf kalau dulu aku belum cukup baik untuk jalan bareng kamu lebih jauh.",
  "Sekarang… aku cuma ingin kamu bisa capai semua mimpi kamu satu per satu.",
  "Dengan orang yang tepat, dan hati yang utuh.",
  "Selamat ulang tahun, Yusrina 🤍",
  "Kamu pantas bahagia.",
  "Semoga tahun ini jadi awal yang lembut dan baik untuk kamu ya 🌸",
  "Salam hangat,\n-Arsyaf | Jakarta, 30 Juli 2025.",
];

function getBotReply() {
  if (replyIndex < replies.length) {
    return replies[replyIndex++];
  } else {
    return "Salam hangat,\n-Arsyaf | Jakarta, 30 Juli 2025.";
  }
}
// === EFEK BUNGA JATUH ===
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.textContent = "🌸";
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.fontSize = Math.random() * 10 + 20 + "px";
  flower.style.animationDuration = Math.random() * 5 + 5 + "s";
  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 10000);
}
setInterval(createFlower, 500);

// ============ Global Access ============
window.sendMessage = sendMessage;
window.handleKey = handleKey;
window.toggleDark = toggleDark;
// }  <-- Hapus tanda kurung kurawal ini jika kamu aktifkan countdown di atas
