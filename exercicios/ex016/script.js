function contar() {    
    var inc = window.document.getElementById("inc")
    var fm = window.document.getElementById("fm")
    var pas = window.document.getElementById("pas")
    var res = window.document.getElementById("res")
    var início = Number(inc.value)
    var fim = Number(fm.value)
    var Passo = Number(pas.value)

    if (inc.value.length  == 0 || fm.value.length  == 0) {
        res.innerHTML = "Impossível Contar"
        window.alert("[Erro] Caixa vazia")
    }
    else if (início == fim){
        res.innerHTML = "Impossível Contar"
    }
    else{
        if(Passo <= 0){
            window.alert("[ERRO] Passo Inválido, vamos considerar o passo 1")
            Passo = 1
        }
        res.innerHTML = ""
        if(fim>início){
            for( var c = início ; c <= fim ; c += Passo){
                res.innerHTML = res.innerHTML + c + "\u{1F449} "
            }
        }
        else if(início>fim){
            for( var c = início ; c >= fim ; c -= Passo){
                res.innerHTML = res.innerHTML + c + "\u{1F449} "
            }
        }
        res.innerHTML = res.innerHTML + "\u{1F3C1}"
    } 
}
