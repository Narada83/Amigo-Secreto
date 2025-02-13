//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
//Aqui você deverá desenvolver a lógica para resolver o problema.

//1. Array para armazenar nomes.
let nomes = [];

//2. Função para agregar amigos.
function adicionarAmigo() {
    let campoAmigo = document.getElementById('amigo'); // html.
    let amigo = campoAmigo.value;
    nomes.push(amigo);// Add na lista.
    console.log(nomes);   

campoAmigo.value = ''; // limpa campo.
campoAmigo.focus(); // retorna o cursor.
}