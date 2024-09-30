var n = []

function soma() {
    let sa = 0
    for(let c in n){
        sa += n[c]
    }
    return sa
}

function média() {
    let me = 0
    let sm = soma()
    me = sm/n.length
    return me
}

function adicionar() {
    let num = window.document.getElementById("txtn")
    let tab = window.document.getElementById("tab")
    let vn = num.value
    if (num.value.length == 0) {
        window.alert("[Erro]: Caixa Vazia")
    } else if(vn>100 || vn<0){
        window.alert("[Erro]: Número inválido")
    } else{
        if(n.indexOf(Number(num.value)) == -1){
            n.push(Number(num.value))
            tab.innerHTML = ""
            for(let pos in n){   
                let item = window.document.createElement("option")
                item.text = `Valor ${n[pos]} Adicionado`
                item.value = `tab${pos+1}`
                tab.appendChild(item)
                res.innerHTML = ""
            }
        } else{
            window.alert("[Erro]: Número ja adicionado")
        }
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    if(tab.innerHTML != ""){
        let res = window.document.getElementById("res")
        n.sort
        let sm = soma()
        let md = média()
        res.innerHTML = `<p>No total temos ${n.length} Números<\p>`
        res.innerHTML += `<p>O maior valor é ${n[n.length-1]}<\p>` 
        res.innerHTML += `<p>O menor valor é ${n[0]}<\p>` 
        res.innerHTML += `<p>A soma de todos os valores é ${sm}<\p>` 
        res.innerHTML += `<p>A média é ${md}<\p>`
    } else{
        window.alert("[Erro]: Adicione Valores antes de finalizar")
    }
}