// Enquanto while
//  var valor = 0;
//  var operacao = 'S';


//  while(operacao != 'N')
//  {
//      valor = valor + 1;
//      console.log(valor);
//      operacao = prompt  ('Adicionar mais? - S=sim e N=não');

  
//  }
//  ELE FAZ A CONDIÇÃO PRIMEIRO E EXECUTAR AS AÇÕES DENTRO DELE , já esse aqui tem q pergunta primeiro e depois disso o usuario digita ai sim vai executa



// Fazer do-while
var valor = 0;
var operacao = 'S';

do
{
    valor = valor + 1;
    operacao = prompt  ('Adicionar mais? - S=sim e N=não');
    console.log(valor);

}while(operacao != 'N');

// já aqui é o contrario, ele vai executar primeiro e pergunta depois, com isso já mostrar o numero 1 pq ele executa primeiro



// Para - for
    // Valor inicial
    // Codição de parada
    // Acumuladora/Decrementadora

// for(var inicio = 1; inicio <= 10; inicio++)
// {
//     console.log(inicio);
//     // crescente

// }


// for(var inicio = 1; inicio <= 10; inicio++)
// {
//     console.log(inicio + ' x 5 = '+inicio*5);

//     // tabuada de 5

// }


for(var inicio = 10; inicio >= 1; inicio--)
{
    console.log(inicio + ' x 5 = '+inicio*5);

    // tabuada de 5 = decrecente - laço contado e exelente quanto tenho um quantidade definada de voltas q vou da no meu laço

}