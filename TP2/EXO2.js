var boundaries = document.querySelectorAll("div#maze div.boundary");
var start = document.querySelector("#start");
var end = document.querySelector("#end");
var status = document.querySelector("#status");
var winner = true;

  start.addEventListener("mouseover", function() {
      for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseover", function() { 
          winner=false;
          // alert("YOU LOSE!") NOT ASKED FOR IN THE EXERCISE
          // boundaries[i].style.background = "#fc0303"
          boundaries.forEach((i, index) => {
            boundaries[index].style.background = "#fc0303"
          })
          document.getElementById("status").innerHTML="you lost";
        });

        
    }
  });

// end.addEventListener("mouseover", function() {
//   if (winner == true) {
// alert("YOU WIN!");
//   }
// });
