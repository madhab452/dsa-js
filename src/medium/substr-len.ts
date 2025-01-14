function lengthOfLongestSubstring(s: string): number {
    const xmap: Map<string, number> = new Map();
    let i = 0, max = 0;

    for (let j = 0; j < s.length; j++) {
        if (xmap.has(s[j])) {
            i = Math.max(xmap.get(s[j])! + 1, i);
        }
        max = Math.max(max, j - i + 1);

        xmap.set(s[j], j);
    }

    return max;
}



// console.log(lengthOfLongestSubstring("bbbbed"))
// console.log(lengthOfLongestSubstring("pwwkew"))
// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("abc"))
// console.log(lengthOfLongestSubstring("dvdf"))
// console.log(lengthOfLongestSubstring("tmmzuxt"))