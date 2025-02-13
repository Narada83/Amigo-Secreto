//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
//Aqui você deverá desenvolver a lógica para resolver o problema.

//1. Array para armazenar nomes.
let nomes = [];

//2. Função para agregar amigos.
function adicionarAmigo() {
    let campoAmigo = document.getElementById('amigo'); // html.
    let amigo = campoAmigo.value;
    nomes.push(amigo);// Add na lista.
    campoAmigo.value = ''; // limpa campo.
    campoAmigo.focus(); // retorna o cursor.
}

//3. Função para atualizar lista.
function updateLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
      
    for (let numerico = 0; numerico < nomes.length; numerico++) {
        let li = document.createElement("li");
        li.textContent = nomes[numerico];
        listaAmigos.appendChild(li);
        }
        console.log(nomes);    
}
updateLista();

