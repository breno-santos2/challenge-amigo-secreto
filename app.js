let amigos = [];


function adicionarAmigo() {
    const amigoInput = document.getElementById("amigo");
    const amigo = amigoInput.value.trim(); 

    
    if (amigo === "") {
        alert("Por favor, digite o nome de um amigo!");
        return;
    }

    if (amigos.includes(amigo)) {
        alert("Esse amigo já foi adicionado!");
        return;
    }

    amigos.push(amigo); 
    amigoInput.value = ""; 

    const listaAmigos = document.getElementById("listaAmigos");
    const item = document.createElement("li");
    item.textContent = amigo;
    listaAmigos.appendChild(item);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];


    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

  
    const item = document.createElement("li");
    item.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(item);
}

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});
