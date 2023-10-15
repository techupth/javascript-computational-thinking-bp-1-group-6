function getLetterFrequency(words) {
  // Start coding here
  let countletter = 0;
  for (let letter in words){
    if (words[letter] === "T" || "t"){
    countletter++;
    console.log(words[letter]+ " : " + countletter);
    } if (words[letter] === "h"){
      countletter++;
      console.log(words[letter]+ " : " + countletter);
    } else {
        countletter = 0;
        countletter++;
        //console.log(words[letter]+ " : " + countletter);
    }
    //console.log(words[letter]+ " : " + countletter);
  }
  return countletter;
}

const str = "Techupth";

console.log(getLetterFrequency(str));

/* Output:
{
  t: 2,
  e: 1,
  c: 1,
	h: 2,
	u: 1,
	p: 1
}
*/
