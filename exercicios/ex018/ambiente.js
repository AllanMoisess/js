let num = [5,8,9,3]

num.sort()
num.push(1)
console.log(num)
console.log(`o vetor tem ${num.length} elementos`)
console.log(`O primeiro valor é ${num[0]}`) 
let pos = num.indexOf(10)
if (pos == -1) {
    console.log("O valor não foi encontrado")
} else{
    console.log(`O 8 está na posição ${pos}`)
}
