// https://leetcode.com/problems/binary-tree-level-order-traversal/

import { maxHeight } from "../../common/bfs/max-height";
import { TreeNode } from "../../common/btree/btree";


function loopLevel(root: TreeNode, res: Map<number, number[]>, level: number, maxLevel: number):  Map<number, number[]> {
    if (level > maxLevel) {
        return res
    }

    if (root != null) {
        let resArr = res.get(level) || []
        resArr.push(root.val)
        res.set(level, resArr)

        if (root.left != null) {
            res = loopLevel(root.left, res, level + 1, maxLevel)
        }
        if (root.right != null) {
            res = loopLevel(root.right, res, level + 1, maxLevel)   
        }
    }


    return res
}

function levelOrder(root: TreeNode): number[][] {
    let mh = maxHeight(root)
    let res: Map<number, number[]> = new Map()
    
    for (let i = 1; i <= mh; i++) {
        res.set(i, [])
    }
    
    
    let x =  loopLevel(root, res, 1, mh)

    let fRes: number[][] = []
    x.forEach((v, k) => {
        fRes.push(v)
    })

    return fRes
};


let tn = new TreeNode(3)
tn.left = new TreeNode(9)
tn.right = new TreeNode(20)
tn.right.left = new TreeNode(15)
tn.right.right = new TreeNode(7)

console.log(levelOrder(tn))