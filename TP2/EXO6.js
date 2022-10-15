
var boundaries = document.querySelectorAll("div#maze div.boundary");
var start = document.querySelector("#start");
var end = document.querySelector("#end");
var status = document.querySelector("#status");


var winner = true;





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
  if(winner==true){
    document.getElementById("status").innerHTML="you win";
  }
      
winner=false;
 

}

);


function stopPropagation() {
if(winner == false) {  window.location.reload();
}
}