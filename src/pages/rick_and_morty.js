const retorno = document.getElementById('retorno')
const URL = 'https://rickandmortyapi.com/api/character'; //url da api

async function chamarApi() { //funcao da api
    const resposta = await fetch(URL); // const pra esperar a api processar as requisições
    console.log(resposta) //imprime o retorno no console
    if (resposta.status === 200) {
        const objeto = await resposta.json(); //criando uma variavel para armazenar o json de retorno da api
        const sorteador = Math.trunc(Math.random(objeto.results.name)*18)
        console.log(sorteador)
        for (let i = 0; i < sorteador; i++) {
            if (sorteador === objeto.results[i].id) {
                console.log("achou")
                retorno.innerHTML = `<img src="${objeto.results[i].image}"><br>`;
                retorno.innerHTML += `Nome: ${objeto.results[i].name}<br>`;
                retorno.innerHTML += `Espécie: ${objeto.results[i].species}<br>`;
                retorno.innerHTML += `Gênero: ${objeto.results[i].gender}<br>`;
                break;
            }
        }
    }
}

chamarApi();