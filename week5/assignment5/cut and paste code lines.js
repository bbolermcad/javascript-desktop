favoriteAuthor = prompt("Who is your favorite Author showcased here?");

switch(favoriteAuthor) {

  case: "Churchill":
  console.log(churchillSpeech.author + " was" + churchillSpeech.authorAge +" during this speech")
  break;

  case: "Ghandi":
  console.log(ghandiSpeech.author + " was" + ghandiSpeech.authorAge +" during this speech")
  break;

  case: "Demonthenes":
  console.log(demosthenesSpeech.author + " was " + demosthenesSpeech.authorAge +"during this speech")
  break;

  default:
  console.log("I don't think that's an author showcased here");
}
