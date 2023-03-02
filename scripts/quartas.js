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
    "09/12",
    "friday",
    "17:00",
    createGame("Croatia", "1 <strong style='font-size: 20px'>(4 x 2)</strong> 1", "Brazil") ,
    "results",
      "Lusail",
      "73°F",
      "8336"
  ) +
    createCard(
        "09/12",
        "friday",
        "20:00",
        createGame("Netherlands", "2 <strong style='font-size: 20px'>(3 x 4)</strong> 2", "argentina"),
        "results",
        "Education City",
        "73°F",
        "7190"
    ) +
  createCard(
    "10/12",
    "Saturday",
    "17:00",
    createGame("Marroco", "1 x 0", "portugal"),
    "results",
      "Al Bayt",
      "75°F",
      "10738"
  ) +
    createCard(
        "10/12",
        "Saturday",
        "20:00",
        createGame("England", "1 x 2", "France"),
        "results",
        "Al Thumama",
        "75°F",
        "8888"
    )
