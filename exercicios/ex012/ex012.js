var agora = new Date()


var hora = String(agora.getHours()) + ':'+ String(agora.getMinutes())
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log(`É de manhã BOM DIA!`)
}else if(hora <= 18) {
    console.log(`Está de tarde Boa Tarde!`)
} else {
    console.log(`Está de noite Boa Noite!`)
}