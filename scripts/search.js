function createGame(player1, hour, player2) {
  let player1alt = player1.slice(-1) === "a" ? "da" : "do"
  let player2alt = player2.slice(-1) === "a" ? "da" : "do"
  return `
    <li>
      <div class="jogo">
        <img src="./assets/${player1}.svg" alt="Bandeira ${player1alt} ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/${player2}.svg" alt="Bandeira ${player2alt} ${player2}" />
      </div>
    </li>
    <div class="nome-times">
      <h1>${player1}</h1>
      <h1>${player2}</h1>
    </div>
  `
}

let delay = -0.15
function createCard(date, day, games, finished) {
  delay = delay + 0.15
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <div class="finalizado">
        <h3>${finished}</h3>
      </div>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const team1 = urlParams.get('team1')
const team2 = urlParams.get('team2')

document.querySelector("#cards").innerHTML =
  createCard(
    "18/12",
    "Sunday",
    createGame(team1, ""+getRandomInt(5)+" x "+getRandomInt(5), team2),
    "encerrado"
  )
