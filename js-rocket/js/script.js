var achtergrondkleur = function () {
  var raket = document.getElementById("raket");
  var top = document.getElementById("top");
  var frag1 = document.getElementById("frag1");
  var frag2 = document.getElementById("frag2");



  raket.classList.toggle("raket");
  top.classList.add("weg");
  frag1.style.display = "none";
  frag2.style.display = "none";

};
