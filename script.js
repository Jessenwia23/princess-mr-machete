import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmgiOgNife84aqECuBMof3Hjx-iNy8NPQ",
  authDomain: "princessmrmacheteapp.firebaseapp.com",
  projectId: "princessmrmacheteapp",
  storageBucket: "princessmrmacheteapp.appspot.com",
  messagingSenderId: "397581062474",
  appId: "1:397581062474:web:dadc5ce6378abefad0f1b3",
  measurementId: "G-G90TVY0ZCF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// 🔁 Utility: Load documents from Firestore collection
async function loadCollection(colName, handler) {
  const snapshot = await getDocs(collection(db, colName));
  snapshot.forEach(doc => handler(doc.data()));
}

// 📓 Bible Journal
loadCollection("bibleJournal", data => {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${data.verse}</strong><p>${data.note}</p>`;
  document.getElementById("bibleJournalEntries").appendChild(div);
});

// 🛡 Prayer Warrior
loadCollection("prayerWarrior", data => {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${data.title}</strong><p>${data.verse}</p><em>${data.note}</em>`;
  document.getElementById("prayerWarriorList").appendChild(div);
});

// 🙏 Personal Prayers
loadCollection("prayers", data => {
  const li = document.createElement("li");
  li.textContent = data.prayer;
  document.getElementById("prayerList").appendChild(li);
});

// 🎶 Christian Songs
loadCollection("songs", data => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="\${data.link}" target="_blank">${data.title}</a>`;
  document.getElementById("songList").appendChild(li);
});

// 🎁 Wishlist
loadCollection("wishlist", data => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="\${data.link}" target="_blank"><strong>\${data.title}</strong></a> - \${data.note}`;
  document.getElementById("wishlistItems").appendChild(li);
});

// 💰 Savings Tracker
loadCollection("savings", data => {
  const div = document.createElement("div");
  const percent = (data.saved / data.goal * 100).toFixed(0);
  div.innerHTML = `<p>${data.title}: £${data.saved} / £${data.goal} (${percent}%)</p>`;
  document.getElementById("savingsGoals").appendChild(div);
});

// 📅 Achievements
loadCollection("achievements", data => {
  const div = document.createElement("div");
  div.innerHTML = `<strong>${data.date}</strong>: ${data.title} - ${data.note}`;
  document.getElementById("achievementsTimeline").appendChild(div);
});

// 💑 Couple Journal
loadCollection("coupleJournal", data => {
  const div = document.createElement("div");
  div.innerHTML = `<p>${data.entry}</p>`;
  document.getElementById("journalEntries").appendChild(div);
});

// 🏆 Leaderboard
loadCollection("leaderboard", data => {
  const li = document.createElement("li");
  li.textContent = `${data.name}: ${data.points} pts`;
  document.getElementById("leaderboardList").appendChild(li);
});

// 📖 Daily Bible Verse
const verses = [
  "Psalm 46:1 – God is our refuge and strength, a very present help in trouble.",
  "Isaiah 41:10 – Fear not, for I am with you...",
  "Romans 8:28 – All things work together for good...",
  "John 3:16 – For God so loved the world...",
];
const dailyVerse = verses[new Date().getDate() % verses.length];
document.getElementById("dailyVerse").innerHTML = `<em>${dailyVerse}</em>`;

// 🎡 Spin the Wheel
function spinWheel() {
  const ideas = ["Movie Night", "Online Game", "Virtual Picnic", "Watch Party", "Cooking Together"];
  const chosen = ideas[Math.floor(Math.random() * ideas.length)];
  document.getElementById("wheelResult").textContent = "Tonight's date: " + chosen;
}
window.spinWheel = spinWheel;
