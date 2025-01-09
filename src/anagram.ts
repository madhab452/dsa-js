function isAnagram(s: string, t: string): boolean {
    let smap = new Map()
    let tmap = new Map()

    for (let i = 0; i < s.length; i++) {
        let v = smap.get(s[i])
        if (v != null) {
            smap.set(s[i], v+1)
        } else {
            smap.set(s[i], 1)
        }
    }

    for (let i = 0; i < t.length; i++) {
        let v = tmap.get(t[i])
        if (v != null) {
            tmap.set(t[i], v+1)
        } else {
            tmap.set(t[i], 1)
        }
    }

    smap.forEach((v: number, k: number) => {
        if (tmap.get(k) == null || tmap.get(k) != v ) {
            return false
        }
        tmap.delete(k)
        smap.delete(k)
    })

    return smap.size == 0 && tmap.size == 0
};

console.log(isAnagram("anagram", "nagaram"))