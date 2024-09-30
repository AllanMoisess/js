function tabuada() {
    let num = window.document.getElementById("txtn")
    let tab = window.document.getElementById("slcT")

    if (num.value.length == 0) {
        window.alert("[Erro]: Digite um número")
    } else {
        let n = num.value
        tab.innerHTML = ""
        for(let c = 1; c<= 10 ; c++){
            let item = window.document.createElement("option")
            item.text = `${n} + ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}