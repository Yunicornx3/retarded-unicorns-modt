/* -------------------------
   Team + Regeln Rotation
   ------------------------- */

/* Beispiel Daten (anpassen) */
const teamMembers = [
  { role: "Owner", name: "[R.U]Yu" },
  { role: "Head Admin", name: "[R.U]Kariko" },
  { role: "Admin", name: "[R.U]Unkown" }
  //{ role: "Moderator", name: "[R.U]Test" },
  //{ role: "Supporter", name: "[R.U]Test" }
];

const rules = [
  "1. Random Deathmatch & Random Damage ist verboten",
  "2. Teaming & Ghosting ist verboten",
  "3. Voice & Chat Spam ist verboten (Auch keine Soundboards)",
  "4. Bitte aussprechbare Namen nutzen (Unser Team kann euch auch gerne ein Nickname setzten)",
  "5. Keine beleidigenden, rassistischen, FSK18 oder diskriminierenden Namen, Sprays oder Avatare",
  "6. Das Beleidigen sowie Provozieren von Spielern ist verboten",
  "7. Jegliche Art von Drittprogrammen, die das Spielerlebnis verändern sind verboten",
  "8. Das Verursachen von Damage mit Props ist verboten",
  "9. Bugusing ist in jeglicher Form verboten"
];

/* DOM-Elemente */
const teamList = document.querySelector(".team-list");
const rulesList = document.querySelector(".rules-list");

let teamIndex = 0;
let rulesIndex = 0;
const CHUNK = 3;

/* Hilfsfunktion: Übergang (fade) sauber auslösen */
function applyFade(container) {
  container.classList.remove("fade-in");
  // force reflow to allow re-adding the class
  void container.offsetWidth;
  container.classList.add("fade-in");
}

/* Rendert ein Team-Chunk (3 Einträge, mit Platzhaltern) */
function renderTeam() {
  const chunk = teamMembers.slice(teamIndex, teamIndex + CHUNK);
  teamList.innerHTML = "";

  chunk.forEach(m => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="role">${m.role}</span><span class="name">${m.name}</span>`;
    teamList.appendChild(li);
  });

  // Platzhalter auffüllen, damit Boxhöhe konstant bleibt
  for (let i = chunk.length; i < CHUNK; i++) {
    const li = document.createElement("li");
    li.innerHTML = `<span class="role">&nbsp;</span><span class="name">&nbsp;</span>`;
    teamList.appendChild(li);
  }

  applyFade(teamList);

  teamIndex += CHUNK;
  if (teamIndex >= teamMembers.length) teamIndex = 0;
}

/* Rendert einen Rule-Chunk (3 Regeln) */
function renderRules() {
  const chunk = rules.slice(rulesIndex, rulesIndex + CHUNK);
  rulesList.innerHTML = "";

  chunk.forEach(r => {
    const li = document.createElement("li");
    li.textContent = r;
    rulesList.appendChild(li);
  });

  for (let i = chunk.length; i < CHUNK; i++) {
    const li = document.createElement("li");
    li.innerHTML = "&nbsp;";
    rulesList.appendChild(li);
  }

  applyFade(rulesList);

  rulesIndex += CHUNK;
  if (rulesIndex >= rules.length) rulesIndex = 0;
}

/* Initial Render + Intervalle */
renderTeam();
renderRules();

setInterval(renderTeam, 4500);  // Team wechselt alle 4.5s
setInterval(renderRules, 5200); // Regeln wechseln alle 5.2s
