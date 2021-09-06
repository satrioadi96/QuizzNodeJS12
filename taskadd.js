/**
 * 13. Buat function isPalindrome(angka) untuk men-cek apakah 4digit inputan angka palindrome atau 
tidak, Hint : charAt.

 * 
 */

function isPalindrome(angka) {
  const angst = String(angka);

  if (isNaN(angst)){
    return `${angka} is not an number`;

  } else if (angst.charAt(0)==angst.charAt(3) && angst.charAt(1)==angst.charAt(2)){
    return `${angka} is palindrome`;
  } else {
    return `${angka} is not palindrome`;
  }

}

console.log(isPalindrome("abcd"));//abcd is not an number
console.log(isPalindrome("123a"));//123a is not an number
console.log(isPalindrome("1234"));//1234 is not palindrome
console.log(isPalindrome(1221));//1221 is palindrome
console.log(isPalindrome("8888"));//8888 is palindrome