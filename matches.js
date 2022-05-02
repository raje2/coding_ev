// write js code here corresponding to matches.html

var data=JSON.parse(localStorage.getItem("schedule"))
var favArr=JSON.parse(localStorage.getItem("favourites")) || [];
display(data)

function display(data){
    data.forEach(function(ele){
   var tr=document.createElement("tr");
    
   var td1=document.createElement("td");
   td1.innerText=ele.number;

   var td2=document.createElement("td");
    td2.innerText=ele.teamA
   var td3=document.createElement("td");
    td3.innerText=ele.teamB
   var td4=document.createElement("td");
   td4.innerText=ele.date

   var td5=document.createElement("td");
   td5.innerText=ele.venue

   var td6=document.createElement("td");
   td6.innerText="favourites";
   td6.style.color="blue"
   td6.style.cursor="pointer"
   td6.addEventListener("click",function(){
    favFun(ele)
   })
   document.querySelector("tbody").append(tr)
   tr.append(td1,td2,td3,td4,td5,td6)

    })
}
function favFun(ele){
 favArr.push(ele);
 localStorage.setItem("favourites",JSON.stringify(favArr))
window.location.href="favourites.html"
}