function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById("ano")
    var res = document.getElementById("res")
    
    if (Fano.value.length == 0 || Fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else{
        var sex = document.getElementsByName("sexo")
        var idade = ano - Number(Fano.value)
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        img.style.height = "300px"
        img.style.width = "300px"
        if (sex[0].checked) {
            gênero = "Homem"
            if (idade < 10) {
                img.setAttribute("src", "fotos/menino.png")
            } else if(idade < 18){
                img.setAttribute("src" , "fotos/homem-jovem.png")
            } else if(idade < 60){
                img.setAttribute("src" , "fotos/homem-adulto.png")
            } else{
                img.setAttribute("src" , "fotos/homem-idoso.png")
            }
        } else if(sex[1].checked) {
            gênero = "Mulher"
            if (idade < 10) {
                img.setAttribute("src", "fotos/menina.png")
            } else if(idade < 18){
                img.setAttribute("src" , "fotos/mulher-jovem.png")
            } else if(idade < 60){
                img.setAttribute("src" , "fotos/mulher-adulta.png")
            } else{
                img.setAttribute("src" , "fotos/mulher-idosa.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}