const main =  document.querySelector("main");
const URL_BASE = "/usuarios";

// so aparece no js/console assim tem que createElement pra aparece no html

async function carregarDados(){

    try {
        const resposta = await fetch(URL_BASE);

        if(!resposta.ok)
            throw new Error("não foi possivel carregar os dados");

        const dados = await resposta.json();
        console.table(dados)
        mostraDados(dados)
    } catch (erro) {
        console.error(erro);
        alert(erro);
    }
}

async function mostraDados(dados) {
    const ul = document.createElement("ul");

   for (let i = 0; i < dados.length; i++){
        const li = document.createElement("li");
        li.innerText = dados[i].nome;

        ul.appendChild(li);
   }

    main.appendChild(ul);
}



window.addEventListener("load", carregarDados);

