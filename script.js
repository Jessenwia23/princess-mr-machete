console.log("Welcome to The Princess and Mr Machete app");

import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

document.getElementById("bibleJournalForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const verse = document.getElementById("bibleVerse").value.trim();
  const note = document.getElementById("bibleNote").value.trim();

  if (verse && note) {
    await addDoc(collection(window.db, "bibleJournal"), {
      verse,
      note,
      timestamp: Date.now()
    });
    alert("Entry saved to Firebase!");
    bibleJournalForm.reset();
  }

import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// COUPLE JOURNAL
document.getElementById("journalForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = journalTitle.value.trim();
  const text = journalText.value.trim();
  if (title && text) {
    const entry = document.createElement("div");
    entry.innerHTML = `<h3>${title}</h3><p>${text}</p>`;
    journalEntries.prepend(entry);
    journalForm.reset();
    await addDoc(collection(window.db, "coupleJournal"), { title, text, timestamp: Date.now() });
  }
});

// TIMELINE
document.getElementById("timelineForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = achievementTitle.value.trim();
  const date = achievementDate.value;
  if (title && date) {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${title}</strong><br><small>${new Date(date).toDateString()}</small>`;
    let inserted = false;
    Array.from(timelineList.children).forEach((el, i) => {
      const curDate = new Date(el.querySelector("small").textContent);
      if (new Date(date) < curDate && !inserted) {
        timelineList.insertBefore(item, el);
        inserted = true;
      }
    });
    if (!inserted) timelineList.appendChild(item);
    timelineForm.reset();
    await addDoc(collection(window.db, "achievements"), { title, date, timestamp: Date.now() });
  }
});

// WISHLIST
document.getElementById("wishlistForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = wishlistTitle.value.trim();
  const link = wishlistLink.value.trim();
  const note = wishlistNote.value.trim();
  if (title && link) {
    const item = document.createElement("li");
    item.innerHTML = `<strong><a href="${link}" target="_blank">${title}</a></strong>${note ? `<br><small>${note}</small>` : ""}`;
    wishlistItems.appendChild(item);
    wishlistForm.reset();
    await addDoc(collection(window.db, "wishlist"), { title, link, note, timestamp: Date.now() });
  }
});

// SAVINGS
document.getElementById("savingsForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const goal = savingsGoal.value.trim();
  const target = parseFloat(savingsTarget.value);
  const current = parseFloat(savingsCurrent.value);
  if (goal && !isNaN(target) && !isNaN(current)) {
    const percent = Math.min((current / target) * 100, 100);
    const div = document.createElement("div");
    div.innerHTML = `<h3>${goal}</h3><div style="background:#eee;"><div style="width:${percent}%;background:#a45ee5;color:#fff;padding:10px;">£${current} / £${target} (${percent.toFixed(1)}%)</div></div>`;
    savingsTracker.innerHTML = "";
    savingsTracker.appendChild(div);
    savingsForm.reset();
    await addDoc(collection(window.db, "savings"), { goal, target, current, timestamp: Date.now() });
  }
});

// LEADERBOARD
let scores = { You: 0, Her: 0, Draws: 0 };
document.getElementById("leaderboardForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const result = winner.value;
  if (result === "You") scores.You += 3;
  else if (result === "Her") scores.Her += 3;
  else if (result === "Draw") { scores.You += 1; scores.Her += 1; scores.Draws += 1; }
  scoreYou.textContent = scores.You;
  scoreHer.textContent = scores.Her;
  drawCount.textContent = scores.Draws;
  await addDoc(collection(window.db, "leaderboard"), { result, scores: { ...scores }, timestamp: Date.now() });
});
document.getElementById("resetLeaderboard").addEventListener("click", () => {
  if (confirm("Reset leaderboard?")) {
    scores = { You: 0, Her: 0, Draws: 0 };
    scoreYou.textContent = 0;
    scoreHer.textContent = 0;
    drawCount.textContent = 0;
  }
});

// BIBLE STUDY JOURNAL
document.getElementById("bibleJournalForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const verse = bibleVerse.value.trim();
  const note = bibleNote.value.trim();
  if (verse && note) {
    const entry = document.createElement("div");
    entry.innerHTML = `<strong>${verse}</strong><p>${note}</p>`;
    bibleJournalEntries.prepend(entry);
    bibleJournalForm.reset();
    await addDoc(collection(window.db, "bibleJournal"), { verse, note, timestamp: Date.now() });
  }
});

// PRAYER WARRIOR
document.getElementById("prayerWarriorForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = warriorTitle.value.trim();
  const verse = warriorVerse.value.trim();
  const note = warriorNote.value.trim();
  if (title && verse) {
    const item = document.createElement("div");
    item.innerHTML = `<h4>${title}</h4><p><strong>${verse}</strong></p>${note ? `<small>${note}</small>` : ""}`;
    prayerWarriorList.prepend(item);
    prayerWarriorForm.reset();
    await addDoc(collection(window.db, "prayerWarrior"), { title, verse, note, timestamp: Date.now() });
  }
});

// PERSONAL PRAYERS
document.getElementById("prayerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const prayer = prayerText.value.trim();
  if (prayer) {
    const item = document.createElement("li");
    item.textContent = prayer;
    prayerList.prepend(item);
    prayerForm.reset();
    await addDoc(collection(window.db, "prayers"), { prayer, timestamp: Date.now() });
  }
});

// CHRISTIAN SONGS
document.getElementById("songForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = songTitle.value.trim();
  const link = songLink.value.trim();
  if (title && link) {
    const item = document.createElement("li");
    item.innerHTML = `<a href="${link}" target="_blank">${title}</a>`;
    songList.appendChild(item);
    songForm.reset();
    await addDoc(collection(window.db, "songs"), { title, link, timestamp: Date.now() });
  }
});


});
