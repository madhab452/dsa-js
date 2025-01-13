type x = {
    
    dist: number;
    point: number[];
}

function kClosest(points: number[][], k: number): number[][] {
    let dists: x[] = []
    for (let i = 0; i < points.length; i++) {
        const dist = Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2)
        dists.push({
            dist: dist,
            point: [points[i][0], points[i][1]]
        })    
    }
    
    const res = dists.sort((a: x, b: x) => {
        return a.dist - b.dist
    })
    
    let v: number[][] = []

    res.slice(0, k).forEach(x => v.push(x.point))
    
    return v
};

const points =  [[3,3],[5,-1],[-2,4]]
const k = 2
const res = kClosest(points, k)

console.log(res)