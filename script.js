
const athletes = [
  { name: "James Williams", position: "WR", class: "2025", state: "TX" },
  { name: "Chris Robinson", position: "LB", class: "2024", state: "FL" },
  { name: "Alex Mitchell", position: "QB", class: "2026", state: "CA" },
];

const container = document.getElementById("athleteContainer");

function renderAthletes(data) {
  container.innerHTML = "";
  data.forEach(a => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="info">
        <h3>${a.name}</h3>
        <p>${a.position} • Class of ${a.class}</p>
        <span class="tag">Rising Stock</span>
      </div>
      <a href="profile.html">View Profile</a>
    `;
    container.appendChild(card);
  });
}

document.getElementById("searchInput").addEventListener("input", filterAthletes);
document.getElementById("positionFilter").addEventListener("change", filterAthletes);
document.getElementById("classFilter").addEventListener("change", filterAthletes);

function filterAthletes() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const pos = document.getElementById("positionFilter").value;
  const cls = document.getElementById("classFilter").value;

  const filtered = athletes.filter(a => {
    return (
      a.name.toLowerCase().includes(search) &&
      (pos === "" || a.position === pos) &&
      (cls === "" || a.class === cls)
    );
  });

  renderAthletes(filtered);
}

renderAthletes(athletes);
