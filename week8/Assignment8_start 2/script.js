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

  //this function will check to see if the year is the newest by comparing them.  I am a bit confused about why this doesn't work, I took a peak at a few other students codes and while I did mine differently and perhaps incorrectly, i feel like the function is doing the same thing.  I just left the variable as i.
  function getOldestOrYoungestString(i) {
    var oldest = speechesArray[0].year;
        newest = speechesArray[0].year;

    for(var x = 0; x < speechesArray.length; x++){
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
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  getAuthorAndYearString(0);
  displayBCEString(0);
  getOldestOrYoungestString(0);

});

document.getElementById('BtnGhandi').addEventListener('click', function(){

  getAuthorAndYearString(1);
  displayBCEString(1);
  getOldestOrYoungestString(1);

});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  getAuthorAndYearString(2);
  displayBCEString(2);
  getOldestOrYoungestString(2);
  //Code in here executes when the user clicks the "Demosthenes" button.

});
