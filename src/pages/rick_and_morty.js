const retorno = document.getElementById('retorno')
const personagem_selecionado = document.getElementById('personagem_selecionado')
const URL = 'https://rickandmortyapi.com/api/character'; //url da api

async function chamarApi() { //funcao da api
    const resposta = await fetch(URL); // const pra esperar a api processar as requisições
    console.log(resposta) //imprime o retorno no console
    if (resposta.status === 200) {
        const objeto = await resposta.json(); //criando uma variavel para armazenar o json de retorno da api
        console.log(objeto)
        for (let i = 0; i < objeto.results.length; i++) {
            if (personagem_selecionado.value === objeto.results[i].name) {
                console.log("achou")
                retorno.innerHTML= `<img src="${objeto.results[i].image}"><br>`; //imprime o retorno de objeto
                break;
            }
        }
    }
}

chamarApi();