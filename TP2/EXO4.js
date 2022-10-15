var boundaries = document.querySelectorAll("div#maze div.boundary");
var start = document.querySelector("#start");
var end = document.querySelector("#end");
var status = document.querySelector("#status");


var winner = true;





  start.addEventListener("click", function() {
        for (var i = 0; i < boundaries.length; i++) {
         
            boundaries[i].addEventListener("mouseover", function() { 
              winner=false;
              alert("YOU LOST!")
              boundaries.forEach((i, index) => {
                boundaries[index].style.background = "#fc0303"
              })
             
            });
      }
  

      stopPropagation();


}
  );



end.addEventListener("mouseover", function() {
      if(winner==true){
        alert("YOU WIN");
      }
    
winner=false;
 

}

);


function stopPropagation() {
if(winner == false) {  window.location.reload();
}
}