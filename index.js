function isPalindrome(word) {
  // Write your algorithm here
  let reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  -Reverse the input word.
  -Compare the reversed word with the original word.
  -If they are the same, return true, else return false.
  
*/

/*
  Add written explanation of your solution here
  The function takes an input word and creates a variable 'reversedWord' that holds the reversed version of the input word. Then
  the function checks if the reversed word is equal to the original word. If they are the same, the function returns 'true', indicating
  that the input word is a palindrome. If they are not the same, the function returns 'false', indicating that the input word is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
