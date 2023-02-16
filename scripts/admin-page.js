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
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function add_Row()
{
  console.log('add row');
 var new_name=document.getElementById("new-team-name").value;
 var new_nation=document.getElementById("new-team-nation").value;
 var new_member=document.getElementById("new-team-member").value;
 var new_tournament=document.getElementById("new-team-tournament").value;

 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var Edit='Edit'
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_nation+"</td><td id='member_row"+table_len+"'>"+new_member+"</td><td id='tournament_row"+table_len+"'>"+new_tournament+"</td> <td><button class='edit' id='edit_button"+table_len+"' onclick='edit_row("+table_len+")'>"+Edit+"</button>  <button class='delete' id='delete_button"+table_len+"' onclick='delete_row("+table_len+")'>Delete</button>  </td></tr>";

 document.getElementById("new-team-name").value="";
 document.getElementById("new-team-nation").value="";
 document.getElementById("new-team-member").value="";
 document.getElementById("new-team-tournament").value="";

}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var name=document.getElementById("name_row"+no);
 var country=document.getElementById("country_row"+no);
 var member=document.getElementById("member_row"+no);
 var tournament=document.getElementById("tournament_row"+no);

 var name_data=name.innerHTML;
 var country_data=country.innerHTML;
 var member_data=member.innerHTML;
 var tournament_data=tournament.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
 member.innerHTML="<input type='text' id='member_text"+no+"' value='"+member_data+"'>";
 tournament.innerHTML="<input type='text' id='tournament_text"+no+"' value='"+tournament_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var country_val=document.getElementById("country_text"+no).value;
 var memeber_val=document.getElementById("member_text"+no).value;
 var tournament_val=document.getElementById("tournament_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("country_row"+no).innerHTML=country_val;
 document.getElementById("member_row"+no).innerHTML=memeber_val;
 document.getElementById("tournament_row"+no).innerHTML=tournament_val;
 console.log(tournament_val);

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}
