function isPalindrome(s: string): boolean {
  let sx = ""
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 'A' && s[i] <= 'Z') {
        sx += String.fromCharCode(s.charCodeAt(i) + "a".charCodeAt(0) - "A".charCodeAt(0)) 
    }
    if (s[i] >= 'a' && s[i] <= 'z' || s[i] >= '0' && s[i] <= '9')  {
        sx += s[i]
    }
  }

  for (let i=0, j=sx.length - 1; i <= j; i++, j--) {
    if (sx[i] != sx[j]) {
        return false
    }
  }

  return true  
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"))

// console.log(isPalindrome(" "))

console.log(isPalindrome("0P"))