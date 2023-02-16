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
    "20/11",
    "SUNDAY",
    createGame("Qatar", "0 x 2", "equador"),
    "result"
  ) +
  createCard(
    "21/11",
    "monday",
    createGame("England", "6 x 2", "Iran") +
      createGame("senegal", "0 x 2", "Netherlands") +
      createGame("USA", "1 x 1", "Wales"),
    "results"
  ) +
  createCard(
    "22/11",
    "tuesday",
    createGame("argentina", "1 x 2", "Saudi Arabia") +
      createGame("Denmark", "0 x 0", "Tunisia") +
      createGame("Mexico", "0 x 0", "Poland") +
      createGame("France", "4 x 1", "australia"),
    "results"
  ) +
  createCard(
    "23/11",
    "wednesday",
    createGame("Marroco", "0 x 0", "Croatia") +
      createGame("alemanha", "1 x 2", "Japan") +
      createGame("Spain", "7 x 0", "costa rica") +
      createGame("bélgica", "1 x 0", "Canada"),
    "results"
  ) +
  createCard(
    "24/11",
    "thursday",
    createGame("Switzerland", "1 x 0", "Cameroon") +
      createGame("uruguai", "0 x 0", "South Korea") +
      createGame("portugal", "3 x 2", "gana") +
      createGame("Brazil", "2 x 0", "Serbia"),
    "results"
  ) +
  createCard(
    "25/11",
    "friday",
    createGame("Wales", "0 x 2", "Iran") +
      createGame("Qatar", "1 x 3", "senegal") +
      createGame("Netherlands", "1 x 1", "equador") +
      createGame("England", "0 x 0", "USA"),
    "results"
  ) +
  createCard(
    "26/11",
    "Saturday",
    createGame("Tunisia", "0 x 1", "australia") +
      createGame("Poland", "2 x 0", "Saudi Arabia") +
      createGame("France", "2 x 1", "Denmark") +
      createGame("argentina", "2 x 0", "Mexico"),
    "results"
  ) +
  createCard(
    "27/11",
    "SUNDAY",
    createGame("Japan", "0 x 1", "costa rica") +
      createGame("bélgica", "0 x 2", "Marroco") +
      createGame("Croatia", "4 x 1", "Canada") +
      createGame("Spain", "1 x 1", "alemanha"),
    "results"
  ) +
  createCard(
    "28/11",
    "monday",
    createGame("Cameroon", "3 x 3", "Serbia") +
      createGame("South Korea", "2 x 3", "gana") +
      createGame("Brazil", "1 x 0", "Switzerland") +
      createGame("portugal", "2 x 0", "uruguai"),
    "results"
  ) +
  createCard(
    "29/11",
    "tuesday",
    createGame("equador", "1 x 2", "senegal") +
      createGame("Netherlands", "2 x 0", "Qatar") +
      createGame("Iran", "0 x 1", "USA") +
      createGame("Wales", "0 x 3", "England"),
    "results"
  ) +
  createCard(
    "30/11",
    "wednesday",
    createGame("Tunisia", "1 x 0", "France") +
      createGame("australia", "1 x 0", "Denmark") +
      createGame("Saudi Arabia", "1 x 2", "Mexico") +
      createGame("Poland", "0 x 2", "argentina"),
    "results"
  ) +
  createCard(
    "01/12",
    "thursday",
    createGame("Croatia", "0 x 0", "bélgica") +
      createGame("Canada", "1 x 2", "Marroco") +
      createGame("costa rica", "2 x 4", "alemanha") +
      createGame("Japan", "2 x 1", "Spain"),
    "results"
  ) +
  createCard(
    "02/12",
    "friday",
    createGame("South Korea", "2 x 1", "portugal") +
      createGame("gana", "0 x 2", "uruguai") +
      createGame("Serbia", "2 x 3", "Switzerland") +
      createGame("Cameroon", "1 x 0", "Brazil"),
    "results"
  )
