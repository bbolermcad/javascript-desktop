var wchurchill = {
  name: "Winston Churchill",
  date: "1940",
  BCE: "false",
};

var mghandi = {
  name: "Mahatma Gandhi",
  date: "1942",
  BCE: "false",
};

var demonthenes = {
  name: "Demosthenes",
  date: "342 B.C.E.",
  BCE: "true",
};

var difference = "2 years";

var speech = []
speech.push(wchurchill)
speech.push(mghandi)
speech.push(demonthenes);

onload = function () {
console.log("Ghandi's speech and Churchill's speech are "+ difference + " years apart.")
}

//when i tried to write var speech = [wchurchill, mghandi, demonthenes]; i wasn't able to see the object parts in the array in the console log.  i am not sure the right way to do this it just fell out of my head after the exercise and this is what i found in google.

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  console.log("There are " + speech.length + " speeches on the page");

});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log("This speech was written by " + wchurchill.name + " in " + wchurchill.date +  ".  It is " + wchurchill.BCE + " that this year is B.C.E.");

});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.

  console.log("This speech was written by " + mghandi.name + " in " + mghandi.date +  ".  It is " + mghandi.BCE + " that this year is B.C.E.");
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.

  console.log("This speech was written by " + demonthenes.name + " in " + demonthenes.date +  ".  It is " + demonthenes.BCE + " that this year is B.C.E.");

});
