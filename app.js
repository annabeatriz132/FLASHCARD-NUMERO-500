function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById9('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
<div clas="cartao_conteudo">
<h3>${categoria}</h3>
<div class="cartao_conteudo_pergunta">
     <p>${pergunta}</p>
</div>
<div class="cartao_conteudo_resposta">
    <p>${resposta}</p>
</div>
</div>
`
container.appenChild(cartao)
}

let respostaEstaVisivel = false;
function viraCartao(){
    respostaEstaVisivel = !respostaEstaVisivel;
    cartao.clasList.toggle('active', respostaEstaVisivel)
}

cartao.addEventListener("click", viraCartao)
container.appenChild(cartao)
}