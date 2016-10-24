//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;
    //this function will check the author information of whatever string number is entered
    function getAuthorAndYearString(i) {
      document.getElementById("ConsoleDisplay").innerHTML = 'This speech was written by ' + speechesArray[i].author + ' in ' + speechesArray[i].year + ".  ";
    };

    //this function will check if BCE is true for whatever string number is entered
    function displayBCEString(i) {
      if(speechesArray[i].yearIsBCE === true){
        document.getElementById("ConsoleDisplay").innerHTML +='This speech took place before the common era.';
      }else{
        document.getElementById("ConsoleDisplay").innerHTML +='This speech took place during the common era.';
      }
    };

    //this function will check to see if the year is the newest by comparing them
    function getOldestOrYoungestString(i) {
      var oldest = speechesArray[0].year,
          newest = speechesArray[0].year;

      for(var i = 0; i < speechesArray.length; i++){
        if(speechesArray[i].year < oldest){
          oldest = speechesArray[i].year;
        }
        if(speechesArray[i].year > newest){
          newest = speechesArray[i].year;
        }
      }

      if(speechesArray[i].year === oldest){
        document.getElementById("ConsoleDisplay").innerHTML += 'This is the oldest speech on the page.  ';
      }
      if(speechesArray[i].year === newest){
        document.getElementById("ConsoleDisplay").innerHTML += 'This is the most recent speech on the page.  ';
      }
    };

document.getElementById('BtnDonate').addEventListener('click', function(){
  var donation = prompt("Thank you for donating!   How much would you like to contribute?")

  if (donation >= 100) {
    var donateheader = document.createElement("h3");
    var donatetext = document.createTextNode("Thank you for your very generous donation!");
    donateheader.appendChild(donatetext);
    document.getElementById("SideNav").appendChild(donateheader);
    donateheader.setAttribute("style", "color:#DB152C");

    var articles = document.getElementsByTagName("article");
    for var (i = 0; i < articles.length; i++) {
      articleName[i].className = "generous-donation";
    }
  }

  else {
    var donateheader = document.createElement("H3");
    var donatetext = document.createTextNode("Thank you for your donation of $" + donation);
    donateheader.appendChild(donatetext);
    document.getElementById("SideNav").appendChild(donateheader);
  }

});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.

//the following applies the three functions to this string
  getAuthorAndYearString(0);
  displayBCEString(0);
  getOldestOrYoungestString(0);

});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
getAuthorAndYearString(1);
displayBCEString(1);
getOldestOrYoungestString(1);


});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.

getAuthorAndYearString(2);
displayBCEString(2);
getOldestOrYoungestString(2);

});
