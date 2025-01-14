 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }

function FromArray(nums: number[]): TreeNode {
    return new TreeNode
}

// FromArray([1,2,3,4,5,6,7, 8])

export {TreeNode, FromArray};