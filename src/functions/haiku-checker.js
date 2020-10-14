export default (string, counter = 0) => {
  if(!"aeiouyAEIOU".includes(string)){
    return null;
  } else if(string === "") {
    return counter;
  } else {
    if (string[1] ==="e" && string[2] ===" " && counter === 0){ //Catches two or three letter words, that are at the very begging of the string, and that end in an e
      return haikuChecker(string.substring(3), counter+=1)
    } else if ("aeiouyAEIOU".includes(string[0]) && "aeiouyAEIOU".includes(string[1])) { //Catches dipthongs
      return haikuChecker(string.substring(2), counter+=1)
    } else if (string[0] === " " && string[2] ==="e"){ //Catches two letter words that end in e
      return haikuChecker(string.substring(3), counter+=1)
    } else if (string[0] === " " && string[3] ==="e"){ //Catches three letter words that end in e
      return haikuChecker(string.substring(3), counter+=1)
    } else if (string[0] === "e" && (string[1] === " " || string[1] === undefined)){ //Catches silent e's
      return haikuChecker(string.substring(1), counter)
    } else if ("aeiouyAEIOU".includes(string[0])){ //Catches all remaining vowels
      return haikuChecker(string.substring(1), counter+=1)
    } else {
      return haikuChecker(string.substring(1), counter) //Increments all other characters
    }
  }
}