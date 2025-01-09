class Stack {
    #items: (number | string)[] 

    constructor() {
        this.#items = []
    }
    
    push(item: number|string) :void {
        this.#items.push(item)
    }

    pop(): (number|string) | null {
        if (this.#items.length == 0) {
            return null
        }

        const v = this.#items[this.#items.length - 1]
        
        if (this.#items.length > 0) {
            this.#items = this.#items.slice(0, this.#items.length - 1)
        }

        return v
    }

    len(): number {
        return this.#items.length
    }

    print(): void {
        console.log(this.#items)
    }
}

export {Stack};


function example() {
    let st = new Stack()
    st.push(1)
    st.push(2)

    st.pop()
    st.pop()
    st.pop()

    st.print()
}

// example()

