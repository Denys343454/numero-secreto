let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 2.0; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirTextoMensagemIniciar() {
    exibirTextoNaTela('h1', 'jogo do numero secreto');
    exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');
}

exibirTextoMensagemIniciar();

exibirTextoNaTela('h1', 'jogo do numero secreto');
exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);


    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', "acertou");
        let palavrasTentativas = tentativas > 1 ? 'tentativas' :
            tentativas;
        let mensagemTentaivas = `você descobriu o numero secreto com 
        ${tentativas} ${palavrasTentativas}! `
        exibirTextoNaTela('p', mensagemTentaivas);
        document.getElementById('reiniciar').removeAttribute
            ('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'o numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'o numero secreto é maior');
        }
        //tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let NumeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

    if (quantidadeDeElementosNaLista == 3) {
        listaDeNumeroSorteados = []
    }

    if (listaDeNumeroSorteados.includes(NumeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumeroSorteados.push(NumeroEscolhido);
        console.log(listaDeNumeroSorteados)
        return NumeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoMensagemIniciar();
    document.getElementById('reiniciar').setAttribute('disabled', 
    true)
}

