function carregar() {
    var txt = document.getElementsByTagName ('h1')
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora}Hrs. `

    if(hora >= 0 && hora < 12) {
        //bom dia
        img.src = './manha certinha.png'
        document.body.style.background = '#F0D4B6'

    } else if(hora < 18) {
        //boa tarde
        img.src = './pexels-johannes-plenio-2850287.jpg'
        document.body.style.background = '#FDB4A5'
    } else if(hora < 24) {
        //boa noite
        img.src = './noite certinha.png'
    }
}