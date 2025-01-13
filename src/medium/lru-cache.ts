// https://leetcode.com/problems/lru-cache

class LRUCache  {
    #xmap: Map<string, string>   
    #size: number

    constructor(size: number) {
        this.#xmap = new Map()
        this.#size = size
    }
    reorderMap(givenKey: string): void{
        let existingVal = this.#xmap.get(givenKey) || ""
        if (existingVal == "") {
            return
        }
        this.#xmap.delete(givenKey)
        this.#xmap.set(givenKey, existingVal)
    }
    get(key: string): string {
       this.reorderMap(key)
       return this.#xmap.get(key) || "" 
    }

    put(key: string, val: string): void {
        if (this.#xmap.size >= this.#size) {
            let firstKey = Array.from(this.#xmap).at(0)?.[0] || ""
            this.#xmap.delete(firstKey)
        }
        this.#xmap.set(key, val)
    }

    print(): void {
        console.log("xmap", this.#xmap)
    }
}


let c = new LRUCache(2)
c.put("1", "one")
c.print()
c.put("2", "two")
c.print()
c.put("3", "three")
c.print()
c.get("1")
c.print()
c.get("2")
c.put("4", "four")
c.print()