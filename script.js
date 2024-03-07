function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var section = window.document.getElementById('mySection')
    var data = new Date()
    var hora = data.getHours()
    if(hora <=1){
        msg.innerHTML = `Agora é ${hora} hora.`
    }
    else{
        msg.innerHTML = `Agora são ${hora} horas.`
    }
    
    if (hora >= 6 && hora < 12){
        img.src = 'fotomanha.png'
        document.body.style.background = '#eab705'
        section.style.boxShadow = '10px 10px 20px #bc940a'
    }
    else if(hora >= 12 && hora < 18){
        img.src = 'fototarde.png'
        document.body.style.background = '#f38933'
        section.style.boxShadow = '10px 10px 20px #c35700'
    }

    else{
        img.src = 'fotonoite.png'
        document.body.style.background = '#103341'
        section.style.boxShadow = '10px 10px 20px #052634'
    }
}