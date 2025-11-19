const form = document.getElementById('formulario_dados');
const resultado_analise = document.getElementById('resultado_analise');
const jogo_desejado = document.getElementById('jogo_desejado');
const sistemaoperacional = document.getElementById('sistemaoperacional');
const RAM = document.getElementById('RAM');
const ROM = document.getElementById('ROM');
const processador = document.getElementById('processador');
const placavideo = document.getElementById('placavideo');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(jogo_desejado.value);
    console.log(sistemaoperacional.value);
    console.log(RAM.value);
    console.log(ROM.value);
    console.log(processador.value);
    console.log(placavideo.value);

    if (jogo_desejado.value === 'gta6') {
        if (sistemaoperacional.value === 'windows') {
            if ((RAM.value === '8GB') || (RAM.value === '16GB') || (RAM.value === '32GB')) {
                if (processador.value != 'I3') {
                    resultado_analise.innerHTML = '<img id="check" src="./imagens/check.png" alt="" width="60px">';
                    resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#4caf50;">O jogo roda no seu computador</span>';
                } else {
                    resultado_analise.innerHTML = '<img id="check" src="./imagens/cancelar.png" alt="" width="70px">';
                    resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#fc202a;">O jogo não roda no seu computador</span>'
                }
            } else {
                resultado_analise.innerHTML = '<img id="check" src="./imagens/cancelar.png" alt="" width="70px">';
                resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#fc202a;">O jogo não roda no seu computador</span>';
            }
        } else {
            resultado_analise.innerHTML = '<img id="check" src="./imagens/cancelar.png" alt="" width="70px">';
            resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#fc202a;">O jogo não roda no seu computador</span>';

        }
    }else if (jogo_desejado.value === 'elderring') {
        if (sistemaoperacional.value === 'windows') {
            if ((RAM.value === '8GB') || (RAM.value === '16GB') || (RAM.value === '32GB')) {
                if (processador.value != 'I3') {
                    resultado_analise.innerHTML = '<img id="check" src="./imagens/check.png" alt="" width="60px">';
                    resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#4caf50;">O jogo roda no seu computador</span>';
                } else {
                    resultado_analise.innerHTML = '<img id="check" src="./imagens/cancelar.png" alt="" width="70px">';
                    resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#fc202a;">O jogo não roda no seu computador</span>'
                }
            } else {
                resultado_analise.innerHTML = '<img id="check" src="./imagens/cancelar.png" alt="" width="70px">';
                resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#fc202a;">O jogo não roda no seu computador</span>';
            }
        } else {
            resultado_analise.innerHTML = '<img id="check" src="./imagens/cancelar.png" alt="" width="70px">';
            resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#fc202a;">O jogo não roda no seu computador</span>';

        }
    }else if (jogo_desejado.value === 'forza5') {
        if (sistemaoperacional.value === 'windows') {
            if ((RAM.value === '8GB') || (RAM.value === '16GB') || (RAM.value === '32GB')) {
                if ((processador.value != 'I3') && (processador.value != 'I5')) {
                    resultado_analise.innerHTML = '<img id="check" src="./imagens/check.png" alt="" width="60px">';
                    resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#4caf50;">O jogo roda no seu computador</span>';
                } else {
                    resultado_analise.innerHTML = '<img id="check" src="./imagens/cancelar.png" alt="" width="70px">';
                    resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#fc202a;">O jogo não roda no seu computador</span>'
                }
            } else {
                resultado_analise.innerHTML = '<img id="check" src="./imagens/cancelar.png" alt="" width="70px">';
                resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#fc202a;">O jogo não roda no seu computador</span>';
            }
        } else {
            resultado_analise.innerHTML = '<img id="check" src="./imagens/cancelar.png" alt="" width="70px">';
            resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#fc202a;">O jogo não roda no seu computador</span>';

        }
    }else if (jogo_desejado.value === 'fifa25') {
        if (sistemaoperacional.value === 'windows') {
            if ((RAM.value === '8GB') || (RAM.value === '16GB') || (RAM.value === '32GB')) {
                if (processador.value != ' ') {
                    resultado_analise.innerHTML = '<img id="check" src="./imagens/check.png" alt="" width="60px">';
                    resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#4caf50;">O jogo roda no seu computador</span>';
                } else {
                    resultado_analise.innerHTML = '<img id="check" src="./imagens/cancelar.png" alt="" width="70px">';
                    resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#fc202a;">O jogo não roda no seu computador</span>'
                }
            } else {
                resultado_analise.innerHTML = '<img id="check" src="./imagens/cancelar.png" alt="" width="70px">';
                resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#fc202a;">O jogo não roda no seu computador</span>';
            }
        } else {
            resultado_analise.innerHTML = '<img id="check" src="./imagens/cancelar.png" alt="" width="70px">';
            resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#fc202a;">O jogo não roda no seu computador</span>';

        }
    }else if (jogo_desejado.value === 'cyberpunk') {
        if (sistemaoperacional.value === 'windows') {
            if ((RAM.value === '16GB') || (RAM.value === '32GB')) {
                if ((processador.value != 'I3') && (processador.value != 'I5')) {
                    resultado_analise.innerHTML = '<img id="check" src="./imagens/check.png" alt="" width="60px">';
                    resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#4caf50;">O jogo roda no seu computador</span>';
                } else {
                    resultado_analise.innerHTML = '<img id="check" src="./imagens/cancelar.png" alt="" width="70px">';
                    resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#fc202a;">O jogo não roda no seu computador</span>'
                }
            } else {
                resultado_analise.innerHTML = '<img id="check" src="./imagens/cancelar.png" alt="" width="70px">';
                resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#fc202a;">O jogo não roda no seu computador</span>';
            }
        } else {
            resultado_analise.innerHTML = '<img id="check" src="./imagens/cancelar.png" alt="" width="70px">';
            resultado_analise.innerHTML = resultado_analise.innerHTML + '<span style="color:#fc202a;">O jogo não roda no seu computador</span>';

        }
    }






})


const slider = document.getElementById('sliderFonte');
const valor = document.getElementById('valorFonte');

slider.addEventListener('input', () => {
    const tamanho = slider.value + 'px';
    document.body.style.fontSize = tamanho; // altera o tamanho da fonte do body
    valor.textContent = tamanho; // atualiza o número exibido
});