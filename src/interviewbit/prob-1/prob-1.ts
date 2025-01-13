https://www.interviewbit.com/peer-mock-interview/00101d8a/problem/?origin=upcoming&problem_id=290


function miceToHoles(a: number[], b: number[]): number {
    a = a.sort()
    b = b.sort()
    let res = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < a.length; i++) {
        res = Math.max(Math.abs(a[i] - b[i]), res)
    }

    return res
} 
let a = [-4, 2, 3]
let b = [0, -2, 4]

console.log(miceToHoles(a, b))