import { TreeNode } from "../btree/btree"

function maxHeight(tn: TreeNode): number {
    if (tn == null) {
        return 0
    }

    let max = 1

    let lh = 0
    if (tn.left != null) {
        lh = 1 + maxHeight(tn.left)
    }
    
    let rh = 0
    if (tn.right != null) {
        rh = 1 + maxHeight(tn.right)
    }

    return  Math.max(lh, rh, max)
}

function example() {
    let tn = new TreeNode(3)
    tn.left = new TreeNode(9)
    tn.right = new TreeNode(20)
    tn.right.left = new TreeNode(15)
    tn.right.right = new TreeNode(7)
    let res = maxHeight(tn)    
    console.log(res)

    // let tn = new TreeNode(1)
    // console.log(maxHeight(tn))
}

export {maxHeight}

example()