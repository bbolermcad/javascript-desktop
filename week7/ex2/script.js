
function preparePage () {
document.getElementById("paragraph").onclick = function() {
  if (document.getElementById("paragraph").className == "catch") {
    document.getElementById("paragraph").className = "";
  } else {
    document.getElementById("paragraph").className = "catch";
    }
  };
}

window.onload = function() {
  preparePage();
}
