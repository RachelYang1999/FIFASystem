// Get the modal
var modal = document.getElementById("announcement-modal");

// Get the button that opens the modal
var btn = document.getElementById("announcement-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function openAnnouncementModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeAnnouncementModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const tourErrorMsg = document.getElementById("tournament-error-msg");
const teamErrorMsg = document.getElementById("team-error-msg");
const matchErrorMsg = document.getElementById("match-error-msg");

function add_TRow() {
  var new_name = document.getElementById("new-tournament-name").value;
  var new_start_date = document.getElementById("new-tournament-start-date").value;
  var new_end_date = document.getElementById("new-tournament-end-date").value;
  var new_winner = document.getElementById("new-tournament-winner").value;
  var new_team = document.getElementById("new-tournament-team").value;

  if (new_name && new_start_date && new_end_date && new_winner && new_team) {
    var table = document.getElementById("tournament-table");
    var table_len = (table.rows.length) - 1;
    var Edit = 'Edit'

    // Insert a new row at the second last position
    let row = table.insertRow(table_len);

    // Insert cells for each column
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    // Set the cell values
    cell1.innerHTML = new_name;
    cell2.innerHTML = new_start_date;
    cell3.innerHTML = new_end_date;
    cell4.innerHTML = new_winner;
    cell5.innerHTML = new_team;
    cell6.innerHTML = '<button class="edit">Edit</button><button class="delete" onclick="delete_tournamant_row(' + table_len + ')">Delete</button>';

    // deleteButton.setAttribute("onclick", "delete_tournamant_row('"+table_len+"')");

    document.getElementById("new-team-name").value = "";
    document.getElementById("new-tournament-start-date").value = "";
    document.getElementById("new-tournament-end-date").value = "";
    document.getElementById("new-tournament-winner").value = "";
    document.getElementById("new-tournament-team").value = "";
  } else {
    tourErrorMsg.style.opacity = 1;
  }

}

function add_Row() {
  console.log('add row');
  var new_name = document.getElementById("new-team-name").value;
  var new_nation = document.getElementById("new-team-nation").value;
  var new_member = document.getElementById("new-team-member").value;
  var new_tournament = document.getElementById("new-team-tournament").value;

  if (new_name && new_nation && new_member && new_tournament) {
    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var Edit = 'Edit'
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='name_row" + table_len + "'>" + new_name + "</td><td id='country_row" + table_len + "'>" + new_nation + "</td><td id='member_row" + table_len + "'>" + new_member + "</td><td id='tournament_row" + table_len + "'>" + new_tournament + "</td> <td><button class='edit' id='edit_button" + table_len + "' onclick='edit_row(" + table_len + ")'>" + Edit + "</button>  <button class='delete' id='delete_button" + table_len + "' onclick='delete_row(" + table_len + ")'>Delete</button>  </td></tr>";

    document.getElementById("new-team-name").value = "";
    document.getElementById("new-team-nation").value = "";
    document.getElementById("new-team-member").value = "";
    document.getElementById("new-team-tournament").value = "";
  } else {
    teamErrorMsg.style.opacity = 1;
  }

}

function add_match_Row() {
  console.log("add match row");
  var new_team1 = document.getElementById("new-team1-name").value;
  var new_team1_score = document.getElementById("new-team1-score").value;
  var new_team2 = document.getElementById("new-team2-name").value;
  var new_team2_score = document.getElementById("new-team2-score").value;
  var new_team_winner = document.getElementById("new-winner").value;
  var new_date = document.getElementById("new-date").value;
  var new_city = document.getElementById("new-city").value;
  var new_ticket_sold = document.getElementById("new-ticket-sold").value;

  if (new_team1 && new_team1_score && new_team2 && new_team2_score && new_team_winner && new_date && new_city && new_ticket_sold) {
    var table = document.getElementById("match_table");
    var table_len = (table.rows.length) - 1;
    var Edit = 'Edit'

    // Insert a new row at the second last position
    let row = table.insertRow(table_len);

    // Insert cells for each column
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);
    let cell9 = row.insertCell(8);

    // Set the cell values
    cell1.innerHTML = new_team1;
    cell2.innerHTML = new_team1_score;
    cell3.innerHTML = new_team2;
    cell4.innerHTML = new_team2_score;
    cell5.innerHTML = new_team_winner;
    cell6.innerHTML = new_date;
    cell7.innerHTML = new_city;
    cell8.innerHTML = new_ticket_sold
    cell9.innerHTML = '<button class="edit">Edit</button><button class="delete" onclick="delete_match_row(' + table_len + ')">Delete</button>';

    // deleteButton.setAttribute("onclick", "delete_tournamant_row('"+table_len+"')");

    document.getElementById("new-team1-name").value = "";
    document.getElementById("new-team1-score").value = "";
    document.getElementById("new-team2-name").value = "";
    document.getElementById("new-team2-score").valu = "";
    document.getElementById("new-winner").value = "";
    document.getElementById("new-date").value = "";
    document.getElementById("new-city").value = "";
    document.getElementById("new-ticket-sold").value = "";
  } else {
    matchErrorMsg.style.opacity = 1;
  }

}

function delete_tournamant_row(index) {
  var table = document.getElementById("tournament-table");
  // var row = table.rows[index];
  // Remove the row from the table
  table.deleteRow(index);
}
function delete_match_row(index) {
  var match = document.getElementById("match_table");
  match.deleteRow(index);
}

function delete_row(no) {
  document.getElementById("row" + no + "").outerHTML = "";
}

function edit_row(no) {
  document.getElementById("edit_button" + no).style.display = "none";
  document.getElementById("save_button" + no).style.display = "block";

  var name = document.getElementById("name_row" + no);
  var country = document.getElementById("country_row" + no);
  var member = document.getElementById("member_row" + no);
  var tournament = document.getElementById("tournament_row" + no);

  var name_data = name.innerHTML;
  var country_data = country.innerHTML;
  var member_data = member.innerHTML;
  var tournament_data = tournament.innerHTML;

  name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
  country.innerHTML = "<input type='text' id='country_text" + no + "' value='" + country_data + "'>";
  member.innerHTML = "<input type='text' id='member_text" + no + "' value='" + member_data + "'>";
  tournament.innerHTML = "<input type='text' id='tournament_text" + no + "' value='" + tournament_data + "'>";
}

function save_row(no) {
  var name_val = document.getElementById("name_text" + no).value;
  var country_val = document.getElementById("country_text" + no).value;
  var memeber_val = document.getElementById("member_text" + no).value;
  var tournament_val = document.getElementById("tournament_text" + no).value;

  document.getElementById("name_row" + no).innerHTML = name_val;
  document.getElementById("country_row" + no).innerHTML = country_val;
  document.getElementById("member_row" + no).innerHTML = memeber_val;
  document.getElementById("tournament_row" + no).innerHTML = tournament_val;
  console.log(tournament_val);

  document.getElementById("edit_button" + no).style.display = "block";
  document.getElementById("save_button" + no).style.display = "none";
}
