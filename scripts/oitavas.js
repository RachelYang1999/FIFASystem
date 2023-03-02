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
    "03/12",
    "Saturday",
    "17:00",
    createGame("Netherlands", "3 x 1", "USA"),
    "results",
      "Khalifa",
      "73°F",
      "8449"
  ) +
    createCard(
        "03/12",
        "Saturday",
        "20:00",
        createGame("argentina", "2 x 1", "australia"),
        "results",
        "Khalifa",
        "73°F",
        "8449"
    )+
  createCard(
    "04/12",
    "SUNDAY",
    "17:00",
    createGame("France", "3 x 1", "Poland"),
    "results",
      "Al Blayt",
      "69°F",
      "7609"
  ) +
        createCard(
            "04/12",
            "SUNDAY",
            "20:00",
            createGame("England", "3 x 0", "senegal"),
            "results",
            "Al Thumama",
            "70°F",
            "8997"
        )+
  createCard(
    "05/12",
    "monday",
    "17:00",
    createGame("Japan", "1 <strong style='font-size: 20px'>(1 x 3)</strong> 1", "Croatia"),
    "results",
      "Al Janoub",
      "61°F",
      "7797"
  ) +
    createCard(
        "05/12",
        "monday",
        "20:00",
        createGame("Brazil", "4 x 1", "South Korea"),
        "results",
        "Education City",
        "63°F",
        "10500"
    )+
  createCard(
    "06/12",
    "tuesday",
    "17:00",

      createGame("portugal", "6 x 1", "Switzerland"),
    "results",
      "Al Thumama",
      "70°F",
      "8997"
  )+
    createCard(
        "06/12",
        "tuesday",
        "20:00",
        createGame("Marroco", "0 <strong style='font-size: 20px'>(3 x 0)</strong> 0", "Spain"),
        "results",
        "Lusail",
        "79°F",
        "7997"
    )
