function binarySearchRecursive(nums: number[], target: number, start: number, end: number): number {
    let mid = start + Math.floor((end-start) / 2) 
    if (start > end) {
        return -1
    }  
    if (nums[mid] == target) {
        return mid
    } else if (target > nums[mid]) {
        return binarySearchRecursive(nums, target, mid+1, end)
    } else {
        return binarySearchRecursive(nums, target, start, end - 1)
    }
}

function binarySearchIterative(nums: number[], target: number, start: number, end: number) {
    let mid = 0
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2) 
        if (nums[mid] == target) {
            return mid
        } else if (target > nums[mid]) {
            start = mid + 1
        } else {
            end = mid -1
        }
    }
    return -1
}

function search(nums: number[], target: number): number {
    // return binarySearchRecursive(nums, target, 0, nums.length)
    return binarySearchIterative(nums, target, 0, nums.length)
};


let res = search([-1,0,3,5,9,12], 1) // 4

console.log(res)