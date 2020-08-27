// escrito por Bruna Fachinetti

var altura = 0
var largura = 0
var vidas = 1
var nivel = window.location.search.replace('?','')

if (nivel === 'normal') {
    var criaMosquito = setInterval(function(){
        posicaoRamdomica()
    }, 1500)
} else if (nivel === 'hard') {
    var criaMosquito = setInterval(function(){
        posicaoRamdomica()
    }, 1100) 
} else {
    var criaMosquito = setInterval(function(){
        posicaoRamdomica()
    }, 750) 
}

var tempo = 16

var cronometro = setInterval(function(){
    tempo -= 1

    if (tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = "vitoria.html"
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000) // o texto muda a cada 1 segundo


function posicaoRamdomica(){

    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if(vidas > 3){
            window.location.href = "fim_jogo.html"
        } else {
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 120
    var posicaoY = Math.floor(Math.random() * altura) - 120
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //criar elemento html da imagem do mosquito
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
}

posicaoRamdomica()

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

// funcao pra ajustar tamanho do fundo de acordo com a tela
function ajustaTamPalco(){
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTamPalco()


