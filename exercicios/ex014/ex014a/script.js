function carregar() {
    var msg = window.document.getElementById("msg")
    var corpo = window.document.body
    var img = window.document.getElementById("imagem") // img id="imagem"
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`A Hora é ${hora} horas`)
    if (hora >= 5 && hora <= 12) {
        img.src = 'fotos/fotomanha.png'
        corpo.style.backgroundColor = "#e2cd9f"
    }else if (hora >= 13 && hora < 18) {
        img.src = 'fotos/fototarde.png'
        corpo.style.backgroundColor = "#b9846f"
    } else {
        img.src = 'fotos/fotonoite.png'
        corpo.style.backgroundColor = "#515154"
    }
}