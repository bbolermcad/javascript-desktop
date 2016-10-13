
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

/*switch(favoriteSpeechPrompt){
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
}*/

/*if(speechesArray[0].year < speechesArray[1].year && speechesArray[0].year < speechesArray[2].year){
  console.log('This is the oldest speech on the page.');
}else if(speechesArray[0].year > speechesArray[1].year && speechesArray[0].year > speechesArray[2].year){
  console.log('This is the most recent speech on the page.');
}*/

/*if(speechesArray[1].year < speechesArray[0].year && speechesArray[1].year < speechesArray[2].year){
  console.log('This is the oldest speech on the page.');
}else if(speechesArray[1].year > speechesArray[0].year && speechesArray[1].year > speechesArray[2].year){
  console.log('This is the most recent speech on the page.');
}*/

/*if(speechesArray[2].year < speechesArray[0].year && speechesArray[2].year < speechesArray[1].year){
  console.log('This is the oldest speech on the page.');
}else if(speechesArray[2].year > speechesArray[0].year && speechesArray[2].year > speechesArray[1].year){
  console.log('This is the most recent speech on the page.');
}*/
