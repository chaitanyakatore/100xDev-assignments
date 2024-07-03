/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Convert strings to lowercase to ignore case sensitivity
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Check if lengths are different, they can't be anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert strings to arrays, sort them, and then join back to strings
  var sortedStr1 = str1.split("").sort().join("");
  var sortedStr2 = str2.split("").sort().join("");

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
