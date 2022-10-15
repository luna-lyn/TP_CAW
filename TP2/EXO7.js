var boundaries = document.querySelectorAll("div#maze div.boundary");
var start = document.querySelector("#start");
var end = document.querySelector("#end");
var status = document.querySelector("#status");
var bound = document.querySelector("div#maze");


var winner = true;



let isOnBound = false ;
bound.onmouseenter = () => {
  isOnBound = true
}
bound.onmouseleave = () => {
  isOnBound = false
}

  start.addEventListener("click", function() {
        for (var i = 0; i < boundaries.length; i++) {
         
            boundaries[i].addEventListener("mouseover", function() { 
              winner=false;
              
              boundaries.forEach((i, index) => {
                boundaries[index].style.background = "#fc0303"
              })
              document.getElementById("status").innerHTML="you lost";
            });
      }
  

      stopPropagation();


}
  );



end.addEventListener("mouseover", function() {
    if(start && isOnBound && winner==true){
      document.getElementById("status").innerHTML="you win";
      
       winner=false;

  }
    else if(start){
        winner=false;
       
        boundaries.forEach((i, index) => {
          boundaries[index].style.background = "#fc0303"
        });
        document.getElementById("status").innerHTML="you cheated so you lost!";
      }});
  


function stopPropagation() {
if(winner == false) {  window.location.reload();
}
}