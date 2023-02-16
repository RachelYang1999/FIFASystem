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

document.querySelector("#cards").innerHTML =
  createCard(
    "03/12",
    "Saturday",
    createGame("Netherlands", "3 x 1", "USA") +
      createGame("argentina", "2 x 1", "australia"),
    "results"
  ) +
  createCard(
    "04/12",
    "SUNDAY",
    createGame("France", "3 x 1", "Poland") +
      createGame("England", "3 x 0", "senegal"),
    "results"
  ) +
  createCard(
    "05/12",
    "monday",
    createGame("Japan", "1 <strong style='font-size: 20px'>(1 x 3)</strong> 1", "Croatia") +
      createGame("Brazil", "4 x 1", "South Korea"),
    "results"
  ) +
  createCard(
    "06/12",
    "tuesday",
    createGame("Marroco", "0 <strong style='font-size: 20px'>(3 x 0)</strong> 0", "Spain") +
      createGame("portugal", "6 x 1", "Switzerland"),
    "results"
  )
