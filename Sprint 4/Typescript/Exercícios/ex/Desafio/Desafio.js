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
let ativo = document.getElementById('ativo');
let inativo = document.getElementById('inativo');
let bool = false;
const desabilitarInativo = () => {
    if (bool == false) {
        inativo.disabled = true;
        bool = true;
    }
    else {
        inativo.disabled = false;
        bool = false;
    }
};
let boolAtivo = false;
const desabilitarAtivo = () => {
    if (boolAtivo == false) {
        ativo.disabled = true;
        boolAtivo = true;
    }
    else {
        ativo.disabled = false;
        boolAtivo = false;
    }
};
let produtosVisual = document.getElementById('pacote');
const pegando = () => {
    let guardarData;
    let formatada;
    let message = '';
    for (let i = 0; i < pacotes.length; i++) {
        guardarData = new Date(pacotes[i].data);
        formatada = guardarData.toLocaleDateString('en-us');
        message+= `<div id="pacote" class="pacote">`
        message +=  `<div class="cards">`;
        message +=      `<div class="posicionamento_dicria" id="pacote">`;
        message +=          `<br>`;
        message +=          `<h3 id="packTitulo">${pacotes[i].nome}</h3>`;
        message +=          `<p class="packDescricao">${pacotes[i].descricao}</p>`;
        message +=           `<br>`;
        message +=          `<h4 class="dataPack">Data de viagem: ${formatada}</h4>`;
        message +=          `<br>`;
        message +=          `<div class="packBotoes">`;
        message +=              `<button class="editButton" onclick='editar(${i})'>Editar</button></a></div>`;
        message +=              `<button class="deleteButton" onclick="excluir(${i})" >Excluir</button></div>`;
        message +=          `</div>`;
        message +=       `</div>`;
        message +=   `</div>`;
        message+= `</div>`
    }
    produtosVisual.innerHTML = message;
};
let data = document.getElementById('viagem');
let descricao = document.getElementById('descrition');
let namePack = document.getElementById('inputPacote');
let loginButton = document.getElementById('cadastro');
let cadastrarModificacoes = document.getElementById('divCadastro');
const cadastrar = () => {
    if (namePack.value === '')
        return alert('O nome do pacote não foi informado');
    if (data.value === '') {
        alert('A data de viagem não foi informada');
    }
    if (descricao === '') {
        alert('A descrição não foi informada');
    }
    if (data.value != null && descricao.value != null && namePack.value != null) {
        pacotes.push({ data: data.value, descricao: descricao.value, id: pacotes.length, nome: namePack.value });
        pacotes[pacotes.length];
        data.value = '';
        namePack.value = '';
        descricao.value = '';
        pegando();
    }
};
loginButton.addEventListener('click', cadastrar);
const excluir = (i) => {
    pacotes.splice(i, 1);
    pegando();
};
const editar = (i) => {
    namePack.value = pacotes[i].nome;
    descricao.value = pacotes[i].descricao;
    data.value = pacotes[i].data;
    loginButton.innerHTML = `<button onclick = "editarFinal(${i})" class="botaoEditar">Editar</button>`;
};
const editarFinal = (i) => {
    if (namePack.value != '') {
        pacotes[i].nome = namePack.value;
    }
    if (descricao.value != '') {
        pacotes[i].descricao = descricao.value;
    }
    if (data.value != '') {
        pacotes[i].data = data.value;
    }
    pegando();
    loginButton.innerHTML = `<button onclick = "cadastrar()" class="botaoRecomeça" id="cadastro">Cadastrar</button>`;
};
