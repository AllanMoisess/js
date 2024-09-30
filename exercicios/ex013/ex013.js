var agora = new Date()
var diasem = agora.getDay()

switch (diasem) {
    case 0:
        console.log(`Hoje é Domingo á noite |-|`)
        break;

    case 1:
        console.log('Hojé é segunda')
        break

    case 2:
        console.log('Hojé é Terça')
        break

    case 3:
        console.log('Hojé é Quarta')
        break

    case 4:
        console.log('Hojé é Quita')
        break

    case 5:
        console.log('Hojé é Sexta-feira sextoooooooooooooouuuuuuu')
        break

    case 6:
        console.log('Hojé é Sábado')
        break

    default:
        break;
}