let num = ["1","2","3","4","5"]
let n = []
//Number(num[0].valueOf)
//console.log(typeof(num[0]))
function soma() {
    let sm = 0
    for(let c in num){
        n.push(Number(num[c]))
        console.log(typeof(n[c]))
        sm += n[c]
        console.log(sm)
    }
    return sm
}

let res = soma()
console.log(`A soma é ${res}`)