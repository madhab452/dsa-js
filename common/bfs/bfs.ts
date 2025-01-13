import { TreeNode } from "../../common/btree/btree";


function bfs(root: TreeNode, num: number): boolean {
    if (root == null) {
        return false
    }
    let queue: TreeNode[] = []
    queue.push(root)
    while (queue.length > 0) {
        
        let v = queue.shift()
        if (v != undefined && v.val == num) {
            return true
        }    

        if (v?.left != undefined) {
            queue.push(v.left)
        }
        if (v?.right != undefined) {
            queue.push(v.right)
        }

    }

    return false
}


let tn = new TreeNode(1)
tn.left = new TreeNode(2)
tn.left.right = new TreeNode(3)
tn.left.left = new TreeNode(4)
tn.right = new TreeNode(6)

console.log(bfs(tn, 1))