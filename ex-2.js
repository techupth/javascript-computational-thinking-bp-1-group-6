let result1;
let result2;
function countVowels(words) {
  // Start coding here
  let count = 0;
  for (let letter in words){
    //console.log(words[letter]);
    if ((["a","e","i","o","u","A","E"," i","O","U"]).includes(words[letter])){
    count++;
  }
  }
return count;
}
result1 = countVowels("Hello World"); // Output: 3
result2 = countVowels("TechUp"); // Output: 2

console.log(result1); // 3
console.log(result2); //2