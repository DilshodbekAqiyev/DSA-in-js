function reverseWords(str) {
  str = str.trim().replace(/ +/g, " ");
  str = [...str];
  function RChar(l, r, str) {
    while (l < r) {
      [str[l], str[r]] = [str[r], str[l]];
      l++;
      r--;
    }
    return str;
  }
  let strLen = str.length;
  str = RChar(0, strLen - 1, str);
  let left = 0;
  let right = 0;

  while (right < strLen) {
    while (right < strLen) {
      if (str[right] === " ") break;
      right++;
    }
    RChar(left, right - 1, str);
    left = right + 1;
    right++;
  }

  return str.join("");
}

const input = "hello        world         ";
const reversedString = reverseWords(input);
console.log(reversedString);
