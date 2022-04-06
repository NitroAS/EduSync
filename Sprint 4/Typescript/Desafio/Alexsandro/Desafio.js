"use strict";

let pacotes = [];
const consultarFetch = () => {
    const pacote = 'https://62361b7feb166c26eb2f488a.mockapi.io/pacotes';
    fetch(pacote, {
        method: 'GET',
        headers: { 'Content-Type': "application/json" },
    })
        .then(response => response.json())
        .then(result => {
        let a = result;
        let b = a;
        for (let index = 0; index < b.length; index++) {
            pacotes[index] = b[index];
            console.log(pacotes[index]);
        }
        pegando();
    });
};
consultarFetch();
// parte de declarar os produtos é exibir quando clicar, depois disso só colocar as proporsões no css.
let produtosVisual = document.getElementById('produtos');
const pegando = () => {
    let guardarData;
    let formatada;
    let mensagem = '';
    for (let i = 0; i < pacotes.length; i++) {
        guardarData = new Date(pacotes[i].data);
        formatada = guardarData.toLocaleDateString('en-us');
        mensagem += `<div class="produtos">`;
        mensagem += `<div class="cards">`;
        mensagem += `<div class="MovimentoTotalProdutos">`;
        mensagem += `<br>`;
        mensagem += `<h3 class="pacotePacote" id="pacotePacote">${pacotes[i].nome}</h3>`;
        mensagem += `<p class="descricaoDoPacote">${pacotes[i].descricao}</p>`;
        mensagem += `<h4 class="pacoteData">Data de viagem: ${formatada}</h4>`;
        mensagem += `<div class="editarExcluir">`;
        mensagem += `<div class="cardEditar"><a href='#h2'><button class="editar" id="editarFinal" onclick='editar(${i});backTop();'>Editar</button></a></div>`;
        mensagem += `<div class="cardExcluir2"><button class="cardExcluir" onclick='excluir(${i})'>Excluir</button></div>`;
        mensagem += `</div>`;
        mensagem += `</div>`;
        mensagem += `<br>`;
        mensagem += `</div>`;
        mensagem += `</div>`;
    }
    produtosVisual.innerHTML = mensagem;
};
let data = document.getElementById('imputDataViagem');
let descricao = document.getElementById('descricao');
let nomePacote = document.getElementById('inputPacote');
let botaoLogin = document.getElementById('buttonCadastrar');
let botaoEditarFinal = document.getElementById('editarFinal');
let cadastrarModificacoes = document.getElementById('cadastrarModificacoes');
// Parte dedicada para o botão cadastra e para fazer um alert q server pra bloquear quando esquecer alguma de preencher algum dado, depois disso fiz um parte pra quando da terminar de Editar e confirmar , resetar as palavras editada e fica  vazia de novo.
const cadastrar = () => {
    if (nomePacote.value === '')
        return alert('O nome do pacote não foi informado');
    if (data.value === '') {
        alert('A data de viagem não foi informada');
    }
    if (descricao === '') {
        alert('A descrição não foi informada');
    }
    if (data.value != null && descricao.value != null && nomePacote.value != null) {
        pacotes.push({ data: data.value, descricao: descricao.value, id: pacotes.length, nome: nomePacote.value });
        pacotes[pacotes.length];
        data.value = '';
        nomePacote.value = '';
        descricao.value = '';
        pegando();
    }
    else {
        console.log('deu errado!!!');
    }
};
botaoLogin.addEventListener('click', cadastrar);
// Botão excluir q quando clicar deleta um Produto.
const excluir = (i) => {
    pacotes.splice(i, 1);
    pegando();
};
// Botão Editar: serve para declarar os produtos e quando clicar troca o botão "Começar" para o botão "Editar".
const editar = (i) => {
    nomePacote.value = pacotes[i].nome;
    descricao.value = pacotes[i].descricao;
    data.value = pacotes[i].data;
    cadastrarModificacoes.innerHTML = `<button onclick = "editarFinal(${i})"class="botaoEditar">Editar</button>`;
};
// Parte Final do Botão Editar: como lá em cima já fiz metade aqui vai ser a parte q vai exibir para o Usuario quais produtos deseja Editar após o click no botão do produto desejado e depois de mudar os itens só clicar no botão editar(q antes era "Começar") q ele vai trocar e vai voltar por botão "Começar".
const editarFinal = (i) => {
    if (nomePacote.value != '') {
        pacotes[i].nome = nomePacote.value;
    }
    if (descricao.value != '') {
        pacotes[i].descricao = descricao.value;
    }
    if (data.value != '') {
        pacotes[i].data = data.value;
    }
    pegando();
    cadastrarModificacoes.innerHTML = `<button onclick = "cadastrar()" class="botaoRecomeça" id="buttonCadastrar">Cadastrar</button>`;
};
// parte para ativa um botão quando clicar e desativo o outro, pra fica apenas selecionado um botão, foi um sistema Booleano para verificar os produtos que quando um tive clicado o outro vai ta cancelado/bloquando para n poder clicar nos dois ao mesmo tempo.
let checkBoxAtivo = document.getElementById('checkBoxAtivo');
let checkBoxInativo = document.getElementById('checkBoxInativo');
let bool = false;
const desabilitarInativo = () => {
    if (bool == false) {
        checkBoxInativo.disabled = true;
        bool = true;
    }
    else {
        checkBoxInativo.disabled = false;
        bool = false;
    }
};
let boolAtivo = false;
const desabilitarAtivo = () => {
    if (boolAtivo == false) {
        checkBoxAtivo.disabled = true;
        boolAtivo = true;
    }
    else {
        checkBoxAtivo.disabled = false;
        boolAtivo = false;
    }
};
// ser para quando clicar no botão editar subi a pág por top, bem útil para estiver em baixo e com isso sobi rápido.
function backTop() {
    let voltar = window.scrollTo(0, 0);
}
function backEnd() {
    let descer = window.scrollTo(0, document.body.scrollHeight);
}
