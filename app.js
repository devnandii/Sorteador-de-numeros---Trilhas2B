
function sortear(){
    let quantidade =parseInt(document.getElementById('quantidade').value); //guardar o valor da variavel digitada
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate'). value);
    
    if (quantidade > (ate - de + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
  }

    let sorteados = [];
    let numero;
    
    //adicionar os numeros ao array
    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
        
        //verifica se o numero ja está incluso
        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
            alert('Tentando obter número inédito');
        }

        sorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStatusBotao();

}

//gerar numeros aleatorios definidos os intervalos
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min)) + min;

}


function alterarStatusBotao(){
    
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }

}

//limpar todos os campos
function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate'). value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();

}
