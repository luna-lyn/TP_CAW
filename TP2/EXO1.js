var boundaries = document.querySelectorAll("div#maze div.boundary");
var start = document.querySelector("#start");
var end = document.querySelector("#end");
var status = document.querySelector("#status");
var winner = true;

  start.addEventListener("mouseover", function() {
    
    for (var i = 0; i < boundaries.length; i++) {
      boundaries[i].addEventListener("mouseover", function() {
        winner=false;
          // alert("YOU LOSE! START OVER!"); NOT ASKED FOR IN THE EXERCISE
          this.style.background = "#fc0303";
        //   status.innerHTML = "YOU LOSE!";
        document.getElementById("status").innerHTML="you lost";
  });}
}
  );

// end.addEventListener("mouseover", function() {
//   if (winner == true) {
// //     status.innerHTML = "YOU WIN!"
// // alert("YOU WIN!");
//   }
 
// });
