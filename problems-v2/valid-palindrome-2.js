// time complexity O(n)
// space complexity O(1)

function validPalindrome2(s) {
  function isPalindromeRange(i, j) {
    while (i < j) {
      if (s[i] !== s[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }

  function validPalindromeHelper(i, j) {
    while (i < j) {
      if (s[i] !== s[j]) {
        return isPalindromeRange(i + 1, j) || isPalindromeRange(i, j - 1);
      }
      i++;
      j--;
    }
    return true;
  }

  return validPalindromeHelper(0, s.length - 1);
}

console.log("valid palindrome 2: ", validPalindrome2("abca"));
