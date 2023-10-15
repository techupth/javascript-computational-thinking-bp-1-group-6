function getLetterFrequency(words) {
  // Start coding here
  const letterFrequency = {};

  for (let i = 0; i < words.length; i++) {
    const letter = words[i].toLowerCase(); // แปลงอักษรเป็นตัวพิมพ์เล็กเพื่อไม่คำนึงถึงตัวพิมพ์ใหญ่หรือเล็ก
    if (/[a-z]/.test(letter)) {
      letterFrequency[letter] = (letterFrequency[letter] || 0) + 1;
    }
  }

  return letterFrequency;
}

const str = "Techupth";

//getLetterFrequency(str);
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
