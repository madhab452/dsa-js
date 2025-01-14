function threeSumBruteForce(nums: number[]): number[][] {
    let res: number[][] = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            for (let k = j+1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    let r = [nums[i], nums[j], nums[k]]
                    let exist = false
                    res.forEach((v: number[]) => {
                        if (v.sort().toString() == r.sort().toString()) {
                            exist = true
                        }
                    })
                    if (!exist) {
                        res.push(r)
                    } 
                 }
            }
        }
    }

    return res
};


function threeSum(nums: number[]): number[][] {
    nums = nums.sort((a, b) => a-b)

    const res: number[][] = []
    for (let i = 0; i < nums.length-2; i++) {
        let x = i+1, y = nums.length - 1;
        while (x < y){
            let v = [nums[i], nums[x], nums[y]]
            let s = v.reduce((a, c) => a+c, 0)
            if (s == 0) {
                if (res.length > 0 ) {
                    let found = false 
                    res.forEach((a) => {
                        if (a[0] == v[0] && a[1] == v[1] && a[2] == v[2]) {
                            found = true
                        } 
                    })
                    if (!found) {
                        res.push(v)
                    }
                }else {
                    res.push(v)
                }
                y = y -1
            } else if (nums[x] + nums[y] + nums[i] < 0) {
                x = x + 1
            } else {
                y = y - 1
            }
        }
    }

    return res
};

console.log(threeSum([0,0,0, 0]))
// console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))
