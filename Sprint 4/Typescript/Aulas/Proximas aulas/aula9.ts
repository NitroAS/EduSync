// Tratamento de Erros

// Instalação do Fetch


// trycatch
try {

    fetch('https://viacep.com.br/ws/23860000/json/')
    .then(response => response.json());
    
}catch (erro: unknown) {
    

    console.log('Ops, deu ruim :(...Salvando erro em Logs');
}