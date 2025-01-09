class ListNode {
    val: number
    
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function Print(ln: ListNode|null) {
    let current = ln
    while (current != null) {
        process.stdout.write(`${current.val}`, )
        if (current.next != null) {
            process.stdout.write(` -> `)
        } 
        current = current.next
    }    
    process.stdout.write("\n")
}

function FromArray(arr: number[]): ListNode | null {
    let head = new ListNode()
    let current = head
    for (let i = 0; i < arr.length; i++) {
        current.next = new ListNode(arr[i], null)
        current = current.next
    }

    return head.next
}

function example() {
    let nums = [1,4,5,6,7]
    let ll = FromArray(nums)
    Print(ll)
}

// example()

export {ListNode, FromArray, Print}