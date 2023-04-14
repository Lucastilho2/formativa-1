// ATIVIDADE 1

function mensagemErrada() {
    let data = frmRegistro.inData.value;
    let nomedocliente = frmRegistro.inCli.value;
    let telefone = frmRegistro.inFone.value;
    let email = frmRegistro.inMail.value;
    let nomedoproduto = frmRegistro.inProd.value;
    let quantidade = frmRegistro.inQtd.value;
    let valorunitario = frmRegistro.inVal.value;

    if (data == '') {
        let data = document.getElementById('mensagem-erro');
        data.innerHTML = "A data não pode ser vazio!";
        data.style.display = 'block';
        frmRegistro.inData.focus();
        return false;
    }
    if (nomedocliente.length < 5) {
        let data = document.getElementById('mensagem-erro')
        data.innerHTML = "O nome não pode ser vazio ou ou menor que 5 caractres!"
        data.style.display = 'block';
        frmRegistro.inCli.focus();
        return false;
    }
    if (telefone == '') {
        let data = document.getElementById('mensagem-erro')
        data.innerHTML = "O telefone não pode ser vazio!"
        data.style.display = 'block';
        frmRegistro.inCli.focus();
        return false;
    }
    if (email == '') {
        let data = document.getElementById('mensagem-erro')
        data.innerHTML = "O e-mail não pode ser vazio!"
        data.style.display = 'block';
        return false;
    }
    if (nomedoproduto == '') {
        let data = document.getElementById('mensagem-erro')
        data.innerHTML = "O nome do produto não pode ser vazio!"
        data.style.display = 'block';
        frmRegistro.inCli.focus();
        return false;
    }
    if (quantidade == '') {
        let data = document.getElementById('mensagem-erro')
        data.innerHTML = "A quantidade não pode estar vazia!"
        data.style.display = 'block';
        frmRegistro.inCli.focus();
        return false;
    }
    if (valorunitario == '') {
        let data = document.getElementById('mensagem-erro')
        data.innerHTML = "O valor voluntario nao esta vazio ou ou menor que 5 caracteres"
        data.style.display = 'block';
        frmRegistro.inCli.focus();
        return false;
    }


}

// Atividade 2
function enviarImagens() {
    const quantidade = document.getElementById('inQtdImg').value;
    let divcanvas = document.getElementById('canvas');
    let elemento = ' <img id="logo" src="img/logo.png" alt="logo" />';
    divcanvas.innerHTML = ''

    for (let i = 0; i < quantidade; i++) {
        divcanvas.innerHTML += elemento;
    }
}


// Atividade 3
function acenderLampada() {
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(
        caminho.lastIndexOf('/')+1
    );

    if (arquivo=='acesa.jpg' || arquivo=='')
        imagem.src='img/apagada.jpg';
    else
        imagem.src='img/acesa.jpg'
}

// Atividade 4

function desconto() {
    let valorCompra = document.getElementById('valorPedido').value
    let perDesconto = 0
    let valorFinal = 0
    let valorDesconto = 0;

    document.getElementById('inPercDesc').value = '';
    document.getElementById('inValDesc').value = '';
    document.getElementById('inValFinal').value = '';

    if (valorCompra < 500) {
        perDesconto = 0
        valorDesconto = 0
        valorFinal = valorCompra
    }

    if (valorCompra >= 500 && valorCompra < 1000) {
        perDesconto = 0.5;
        valorDesconto = valorCompra * 0.5 / 100;
        valorFinal = valorCompra - valorDesconto;
    }

    if (valorCompra >= 1000 && valorCompra < 1500) {
        perDesconto = 0.8;
        valorDesconto = valorCompra * 0.8 / 100;
        valorFinal = valorCompra - valorDesconto;
    }

    if (valorCompra >= 1500 && valorCompra < 2000) {
        perDesconto = 1;
        valorDesconto = valorCompra * 1 / 100;
        valorFinal = valorCompra - valorDesconto;
    }

    if (valorCompra >= 2000) {
        perDesconto = 1.5;
        valorDesconto = valorCompra * 1.5 / 100;
        valorFinal = valorCompra - valorDesconto;
    }

    document.getElementById('inPercDesc').value = perDesconto;
    document.getElementById('inValDesc').value = valorDesconto;
    document.getElementById('inValFinal').value = valorFinal;

}


