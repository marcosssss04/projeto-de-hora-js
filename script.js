function carregar() {
    var msg = window.document.getElementById('msg')
     var img = window.document.getElementById('imagen')
     var data = new Date()
     var hora = data.getHours()
     //var hora = 
     msg.innerHTML = `Agora sao ${hora} horas.`
     if (hora >= 0 && hora < 12){
         //Bom dia!
         img.src = 'fotomanha.png'
         document.body.style.background = '#a8812d'
     }else if (hora >= 12 && hora < 18){
         //BOA TARDE
         img.src = 'fototarde.png'
         document.body.style.background = '#426838'
     }else{
         //BOA NOITE
         img.src = 'fotonoite.png'
         document.body.style.background = '#276480'
     }
}
