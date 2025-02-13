//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
//Aqui você deverá desenvolver a lógica para resolver o problema.

//1. Array para armazenar nomes.
let nomes = [];

//2. Função para agregar amigos.
function adicionarAmigo() {
    let campoAmigo = document.getElementById('amigo'); // html.
    let amigo = campoAmigo.value;
    if (amigo === '') {//Se estiver vazio, 
        alert('Por favor, insira um nome.'); // exiba um alerta com a mensagem de erro.
        return;
    }

    nomes.push(amigo);// Add na lista.
    campoAmigo.value = ''; // limpa campo.
    campoAmigo.focus(); // retorna o cursor.
}

//3. Função para atualizar lista.
function updateLista() {
    let listaAmigos = document.getElementById("listaAmigos");// html.
    listaAmigos.innerHTML = "";
      //Crie uma função que percorra o array amigos e adicione cada nome como um elemento
      //  <li> dentro de uma lista HTML. Use innerHTML para limpar a lista antes de 
      // adicionar novos elementos.
    for (let numerico = 0; numerico < nomes.length; numerico++) {
        let li = document.createElement("li");
        li.textContent = nomes[numerico];
        listaAmigos.appendChild(li);
        }
        // console.log(nomes);  ok  
}
updateLista()
//4. Implementa uma função para sortear os amigos.   
function sortearAmigo() {
    let sorteio= Math.floor(Math.random() * nomes.length);
    let amigoSecreto = nomes[sorteio];
    //console.log(sorteio);ok
    
    document.getElementById("resultado").innerHTML = `Seu Amigo Secreto é:  ${amigoSecreto}`// html.
    //Mostrar o resultado: Atualizar o conteúdo do elemento de resultado usando document.getElementById() 
    // e innerHTML para exibir o amigo sorteado.
}
//funcionando ok