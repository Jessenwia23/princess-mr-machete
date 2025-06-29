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
});
