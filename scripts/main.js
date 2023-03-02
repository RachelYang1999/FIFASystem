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
function createCard(date, day, time, games, finished, city, temperature, ticket) {
  delay = delay + 0.15
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span> <span>${time}</span></h2>
      <div class="finalizado">
        <h3>${finished}</h3>
      </div>
      <ul>
        ${games}
      </ul>
      <h2>City: <span>${city}</span> </h2>
      <h2>Temperature: <span>${temperature}</span> </h2>
      <h2>Tickets Sold: <span>${ticket}</span> </h2>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "SUNDAY",
    "20:00",
    createGame("Qatar", "0 x 2", "equador"),
    "result",
      "Lusail",
      "73°F",
      "9534"
  ) +
  createCard(
    "21/11",
    "monday",
    "17:00",
    createGame("England", "6 x 2", "Iran") +
      createGame("senegal", "0 x 2", "Netherlands") +
      createGame("USA", "1 x 1", "Wales"),
    "results",
        "Lusail",
      "73°F",
      "9654"
  ) +
  createCard(
    "22/11",
    "tuesday",
    "17:00",
    createGame("argentina", "1 x 2", "Saudi Arabia") +
      createGame("Denmark", "0 x 0", "Tunisia") +
      createGame("Mexico", "0 x 0", "Poland") +
      createGame("France", "4 x 1", "australia"),
    "results",
      "Lusail",
      "73°F",
      "9654"
  ) +
  createCard(
    "23/11",
    "wednesday",
      "17:00",
    createGame("Marroco", "0 x 0", "Croatia") +
      createGame("alemanha", "1 x 2", "Japan") +
      createGame("Spain", "7 x 0", "costa rica") +
      createGame("bélgica", "1 x 0", "Canada"),
    "results",
      "Lusail",
      "73°F",
      "9654"
  ) +
  createCard(
    "24/11",
    "thursday",
      "17:00",
    createGame("Switzerland", "1 x 0", "Cameroon") +
      createGame("uruguai", "0 x 0", "South Korea") +
      createGame("portugal", "3 x 2", "gana") +
      createGame("Brazil", "2 x 0", "Serbia"),
    "results",
      "Lusail",
      "73°F",
      "9654"
  ) +
  createCard(
    "25/11",
    "friday",
      "17:00",
    createGame("Wales", "0 x 2", "Iran") +
      createGame("Qatar", "1 x 3", "senegal") +
      createGame("Netherlands", "1 x 1", "equador") +
      createGame("England", "0 x 0", "USA"),
    "results",
      "Lusail",
      "73°F",
      "9654"
  ) +
  createCard(
    "26/11",
    "Saturday",
      "17:00",
    createGame("Tunisia", "0 x 1", "australia") +
      createGame("Poland", "2 x 0", "Saudi Arabia") +
      createGame("France", "2 x 1", "Denmark") +
      createGame("argentina", "2 x 0", "Mexico"),
    "results",
      "Lusail",
      "73°F",
      "9654"
  ) +
  createCard(
    "27/11",
    "SUNDAY",
      "17:00",
    createGame("Japan", "0 x 1", "costa rica") +
      createGame("bélgica", "0 x 2", "Marroco") +
      createGame("Croatia", "4 x 1", "Canada") +
      createGame("Spain", "1 x 1", "alemanha"),
    "results",
      "Lusail",
      "73°F",
      "9654"
  ) +
  createCard(
    "28/11",
    "monday",
      "17:00",
    createGame("Cameroon", "3 x 3", "Serbia") +
      createGame("South Korea", "2 x 3", "gana") +
      createGame("Brazil", "1 x 0", "Switzerland") +
      createGame("portugal", "2 x 0", "uruguai"),
    "results",
      "Lusail",
      "73°F",
      "9654"
  ) +
  createCard(
    "29/11",
    "tuesday",
      "17:00",
    createGame("equador", "1 x 2", "senegal") +
      createGame("Netherlands", "2 x 0", "Qatar") +
      createGame("Iran", "0 x 1", "USA") +
      createGame("Wales", "0 x 3", "England"),
    "results",
      "Lusail",
      "73°F",
      "9654"
  ) +
  createCard(
    "30/11",
    "wednesday",
      "17:00",
    createGame("Tunisia", "1 x 0", "France") +
      createGame("australia", "1 x 0", "Denmark") +
      createGame("Saudi Arabia", "1 x 2", "Mexico") +
      createGame("Poland", "0 x 2", "argentina"),
    "results",
      "Lusail",
      "73°F",
      "9654"
  ) +
  createCard(
    "01/12",
    "thursday",
      "17:00",
    createGame("Croatia", "0 x 0", "bélgica") +
      createGame("Canada", "1 x 2", "Marroco") +
      createGame("costa rica", "2 x 4", "alemanha") +
      createGame("Japan", "2 x 1", "Spain"),
    "results",
      "Lusail",
      "73°F",
      "9654"
  ) +
  createCard(
    "02/12",
    "friday",
      "17:00",
    createGame("South Korea", "2 x 1", "portugal") +
      createGame("gana", "0 x 2", "uruguai") +
      createGame("Serbia", "2 x 3", "Switzerland") +
      createGame("Cameroon", "1 x 0", "Brazil"),
    "results",
      "Lusail",
      "73°F",
      "9654"
  )
