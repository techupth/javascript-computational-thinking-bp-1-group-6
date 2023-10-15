function countVowels(words) {
  // Start coding here
  // ใช้ Regular Expression เพื่อค้นหาและนับสระภาษาอังกฤษในคำ
  const vowelCount = words.match(/[aeiou]/gi);

  // ถ้า vowelCount ไม่เท่ากับ null (คือพบสระ) ให้นับจำนวนสระที่พบ
  if (vowelCount) {
    return vowelCount.length;
  } else {
    return 0; // ถ้าไม่มีสระในคำให้คืนค่า 0
  }
}

countVowels("Hello World"); // Output: 3
countVowels("TechUp"); // Output: 2

console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("TechUp")); // Output: 2