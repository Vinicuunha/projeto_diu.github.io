const retorno = document.getElementById('retorno')
const URL = 'https://rickandmortyapi.com/api/character'; //url da api

function mostrarPortal(){
    //mostra a imagem
    retorno.innerHTML = ``;
    imagemPortal.style.display = "block"

    //espera 3 segundos
    setTimeout(() => {
        imagemPortal.style.display = "none";
        retorno.style.display = "block"
        chamarApi();
    }, 500)
}


async function chamarApi() { //funcao da api
    const resposta = await fetch(URL); // const pra esperar a api processar as requisições
    console.log(resposta) //imprime o retorno no console
    if (resposta.status === 200) {
        const objeto = await resposta.json(); //criando uma variavel para armazenar o json de retorno da api
        const sorteador = Math.trunc(Math.random(objeto.results.name)*18)
        console.log(sorteador)
        retorno.innerHTML = `<img src="${objeto.results[sorteador].image}"><br>`;
        retorno.innerHTML += `Nome: ${objeto.results[sorteador].name}<br>`;
        retorno.innerHTML += `Espécie: ${objeto.results[sorteador].species}<br>`;
        retorno.innerHTML += `Gênero: ${objeto.results[sorteador].gender}<br>`;
        }
    }


