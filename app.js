//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function limparCampo() {
    campo = document.getElementById("amigo");
    campo.value = "";
}

function atualizaLista(listaAmigos) {
    listaExibida = document.getElementById("listaAmigos");
    listaExibida.innerHTML = "";

    for (let amigo of listaAmigos) {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaExibida.appendChild(item);
    }
}

function adicionarAmigo(listaAmigos) {
    let amigo = document.querySelector('input').value;

    if (amigo != "") {
        listaAmigos.push(amigo);
    } else {
        alert("Por favor, insira um nome.");
    }

    limparCampo();

    atualizaLista(listaAmigos);
}

function sortearAmigo(listaAmigos) {
    let tamanhoLista = listaAmigos.length;
    if (tamanhoLista > 0) {
        let indiceSorteado = Math.floor(Math.random() * tamanhoLista);
        let amigoSorteado = listaAmigos[indiceSorteado];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
    }

}