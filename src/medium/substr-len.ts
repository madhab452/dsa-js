function lengthOfLongestSubstring(s: string): number {
    var xmap: Map<string, number> = new Map()   
    let i = 0, j = 1, max = Number.MIN_SAFE_INTEGER;
    if (s.length == 1) {
        return 1
    }
    while (j < s.length){
        let jthIdex = xmap.get(s[j])
        if (jthIdex == undefined) {
            max = Math.max(j-i)
            j++
        } else {
            i = j
        }
        xmap.set(s[j], j)
        j++
    }

    return max 
};


console.log(lengthOfLongestSubstring("bbbb")) 