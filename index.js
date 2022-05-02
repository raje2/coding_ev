// write js code here corresponding to index.html
// You should add submit event on the for
document.querySelector("#masaiForm").addEventListener("submit",myEvent);
var objArr=JSON.parse(localStorage.getItem("schedule")) || [];
function myEvent(){
    event.preventDefault();
  dataObj={
      number:masaiForm.matchNum.value,
      teamA:masaiForm.teamA.value,
      teamB:masaiForm.teamB.value,
      date:masaiForm.date.value,
      venue:masaiForm.venue.value,
  }
objArr.push(dataObj)
localStorage.setItem("schedule",JSON.stringify(objArr));
window.location.href="matches.html"
}



