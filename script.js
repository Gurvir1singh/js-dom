const iplTeams = [
  {
    teamName: "CSK",
    fullName: "Chennai Super Kings",
    captain: "Ruturaj Gaikwad",
    primaryColor: "#F9CD05", // Yellow
    secondaryColor: "#1A2F57", // Dark Blue
    trophies: 5,
  },
  {
    teamName: "MI",
    fullName: "Mumbai Indians",
    captain: "Hardik Pandya",
    primaryColor: "#004BA0", // Blue
    secondaryColor: "#D1AB3E", // Gold
    trophies: 5,
  },
  {
    teamName: "RCB",
    fullName: "Royal Challengers Bengaluru",
    captain: "Faf du Plessis",
    primaryColor: "#D1132A", // Red
    secondaryColor: "#191919", // Black
    trophies: 0,
  },
  {
    teamName: "KKR",
    fullName: "Kolkata Knight Riders",
    captain: "Shreyas Iyer",
    primaryColor: "#3A225D", // Purple
    secondaryColor: "#D4AF37", // Gold
    trophies: 3,
  },
  {
    teamName: "RR",
    fullName: "Rajasthan Royals",
    captain: "Sanju Samson",
    primaryColor: "#EA1A8E", // Pink
    secondaryColor: "#003687", // Blue
    trophies: 1,
  },
  {
    teamName: "SRH",
    fullName: "Sunrisers Hyderabad",
    captain: "Pat Cummins",
    primaryColor: "#FB643E", // Orange
    secondaryColor: "#000000", // Black
    trophies: 1,
  },
  {
    teamName: "DC",
    fullName: "Delhi Capitals",
    captain: "Rishabh Pant",
    primaryColor: "#004C93", // Blue
    secondaryColor: "#C41E3A", // Red
    trophies: 0,
  },
  {
    teamName: "LSG",
    fullName: "Lucknow Super Giants",
    captain: "KL Rahul",
    primaryColor: "#0057FF", // Blue
    secondaryColor: "#F7A625", // Orange
    trophies: 0,
  },
  {
    teamName: "GT",
    fullName: "Gujarat Titans",
    captain: "Shubman Gill",
    primaryColor: "#1B2133", // Dark Blue
    secondaryColor: "#C5B358", // Gold
    trophies: 1,
  },
  {
    teamName: "PBKS",
    fullName: "Punjab Kings",
    captain: "Shikhar Dhawan",
    primaryColor: "#ED1C24", // Red
    secondaryColor: "#C5B358", // Gold
    trophies: 0,
  },
];

let main = document.querySelector("main");
let h1 = document.querySelector("h1");
let box = document.querySelector("#box");
let btn = document.querySelector("button");
let teamInfo = document.querySelector(".team-info");

btn.addEventListener("click", () => {
  let winner = Math.floor(Math.random() * iplTeams.length);
  h1.innerHTML = iplTeams[winner].teamName;
  main.style.backgroundColor = iplTeams[winner].secondaryColor;
  box.style.backgroundColor = iplTeams[winner].primaryColor;

  teamInfo.innerHTML = `<h2>Team : ${iplTeams[winner].fullName}</h2>`;
  teamInfo.innerHTML += `<h2>Captain : ${iplTeams[winner].captain}</h2>`;
  teamInfo.innerHTML += `<h2>Trophies : ${iplTeams[winner].trophies}</h2>`;
});
