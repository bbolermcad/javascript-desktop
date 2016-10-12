
//switch statement

switch(favoriteSpeechPrompt){
  case 'Churchill':
    console.log(speechesArray[0].author + ' was ' + speechesArray[0].authorAge + ' during this speech.');
    break;
  case 'Ghandi':
    console.log(speechesArray[1].author + ' was ' + speechesArray[1].authorAge + ' during this speech.');
    break;
  case 'Demosthenes':
    console.log(speechesArray[2].author + ' was ' + speechesArray[2].authorAge + ' during this speech.');
    break;
  default:
    console.log('Did you spell that name correctly?');
    break;
}
