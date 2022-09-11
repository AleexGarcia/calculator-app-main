var teclado = document.querySelector('#teclado');
var visor = document.querySelector('#visor');
var valores = [];
teclado.addEventListener('click', e => {

    let dataAtribute = e.target.dataset.tipo;
    let valueAlvo = e.target.value;
    if (dataAtribute === 'numerico') {
        visor.textContent += valueAlvo;
    } else if (dataAtribute === 'funcional') {
        verificaPonto = new RegExp(/\./)
        if (valueAlvo === '.' && !verificaPonto.test(visor.textContent)) {
            visor.textContent += valueAlvo;
        } else if (visor.textContent != '' && visor.textContent != '-' && (valueAlvo === '+' || valueAlvo === '/' || valueAlvo === 'x' || valueAlvo === '-')) {
            if (valueAlvo === 'x') {
                valueAlvo = '*';
            }
            valores.push(visor.textContent, valueAlvo);
            limpaVisor();

        } else if (valueAlvo === '-' && visor.textContent === '') {
            visor.textContent += valueAlvo;
        } else if (valueAlvo === '=') {
            if (visor.textContent != '') {
                valores.push(visor.textContent);
            }
            resultadoTexto = resultado(valores);
            visor.textContent = resultadoTexto;
            reset();
        } else if (valueAlvo === 'RESET') {
            reset();
            limpaVisor();
        } else if (valueAlvo === 'DEL' && valueAlvo != '') {

            let valor = visor.textContent;
            valor = valor.substring(0, valor.length - 1)
            visor.textContent = valor;
        }


    }
})

function limpaVisor() {
    visor.textContent = '';
}
function reset() {
    valores = [];
}
function resultado(numeroDigitados) {

    return eval(numeroDigitados.join(''))

}

temas = document.querySelector('#input-radio');

temas.addEventListener('input', e => {
    let html = document.querySelector('html')
    
    if (e.target.value === '1') {
        html.classList.remove('themeDois')
        html.classList.remove('themeTres')
        html.classList.add('themeUm')
    } else if (e.target.value === '2') {
        html.classList.add('themeDois')
        html.classList.remove('themeTres')
        html.classList.remove('themeUm')
    } else if (e.target.value === '3') {
        html.classList.remove('themeDois')
        html.classList.add('themeTres')
        html.classList.remove('themeUm')
    }


})