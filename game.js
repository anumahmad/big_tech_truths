
const questions = [
  {
    q: "Google was sued by 40 states for misleading users about location tracking.",
    a: true,
    e: "Google continued tracking users even after they disabled location services. The settlement was $392 million."
  },
  {
    q: "The U.S. federal government has a single comprehensive privacy law.",
    a: false,
    e: "The U.S. only has fragmented laws like HIPAA and COPPA. Only a few states have comprehensive ones."
  },
  {
    q: "The GDPR applies only to companies inside the EU.",
    a: false,
    e: "It applies to any company dealing with EU citizens, even if they're based in the U.S."
  },
  {
    q: "Google earned over 80% of its revenue from advertising.",
    a: true,
    e: "Google makes most of its money from targeted ads using user data."
  },
  {
    q: "Apple was fined €57 million under GDPR for violating consent rules.",
    a: false,
    e: "It was Google that was fined €57 million in 2019 for failing to obtain valid user consent."
  },
  {
    q: "Only California, Virginia, and Colorado have comprehensive state-level privacy laws.",
    a: true,
    e: "These are currently the only U.S. states with such laws in effect."
  },
  {
    q: "Facebook and Google changed their privacy rules because of U.S. pressure.",
    a: false,
    e: "It was EU pressure through GDPR that forced changes to their privacy practices."
  },
  {
    q: "Google Analytics has been criticized for giving U.S. agencies access to EU user data.",
    a: true,
    e: "French regulators found it didn't provide enough safeguards when data crossed borders."
  },
  {
    q: "The GDPR allows fines up to €1 million per company.",
    a: false,
    e: "Fines can go up to €20 million or 4% of global revenue, whichever is higher."
  },
  {
    q: "Google sells user data to advertisers to target ads more effectively.",
    a: true,
    e: "They auction off ad spots based on user profiles built from search and tracking."
  },
  {
    q: "Amazon Echo has never been accused of recording conversations without consent.",
    a: false,
    e: "There have been multiple reports of Echo recording conversations without clear consent."
  },
  {
    q: "The CNIL is a U.S. agency that enforces the GDPR.",
    a: false,
    e: "CNIL is a French data protection authority that enforces GDPR in France."
  },
  {
    q: "Israel’s IDF uses AI tools developed by Google and Microsoft in warfare.",
    a: true,
    e: "Project Nimbus and other tools provide cloud and AI services to Israel’s military."
  },
  {
    q: "Gmail collects more data than Apple Mail and Microsoft Outlook.",
    a: true,
    e: "Gmail gathers location, contacts, purchase history, diagnostics, and more."
  },
  {
    q: "Only high-ranking Israeli officers could order AI-assisted airstrikes.",
    a: false,
    e: "Even mid-level officers were allowed to call strikes with high civilian casualty thresholds."
  }
];

let current = 0;
let score = 0;
let scoreTrack = [];

function startGame() {
  current = 0;
  score = 0;
  scoreTrack = [];
  document.getElementById("result-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("feedback").textContent = "";
  document.getElementById("countdown").textContent = "";
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.q;
  document.getElementById("feedback").textContent = "";
  document.getElementById("countdown").textContent = "";
}

function submitAnswer(ans) {
  const q = questions[current];
  const feedback = document.getElementById("feedback");
  const countdown = document.getElementById("countdown");

  if (ans === q.a) {
    score++;
    scoreTrack.push("✅");
    feedback.textContent = "Correct!";
  } else {
    scoreTrack.push("❌");
    feedback.textContent = `Incorrect. ${q.e}`;
  }

  current++;
  if (current < questions.length) {
    let timer = 3;
    countdown.textContent = `Next question in ${timer}...`;
    const interval = setInterval(() => {
      timer--;
      countdown.textContent = `Next question in ${timer}...`;
      if (timer === 0) {
        clearInterval(interval);
        showQuestion();
      }
    }, 1000);
  } else {
    setTimeout(endGame, 3000);
  }
}

function endGame() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";
  document.getElementById("score").textContent = score;
}

function copyScore() {
  const result = scoreTrack.join("");
  navigator.clipboard.writeText("Big Tech Truths" + result + "  (" + score + "/15)").then(() => {
    alert("Score copied to clipboard!");
  });
}

startGame();
