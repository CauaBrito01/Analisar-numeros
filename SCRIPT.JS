let numeros = []

function adicionar(x){
    let analisar_numeros = window.document.getElementById('analisar_numeros')
    let input_numeros = window.document.getElementById('input_numeros')      
    x = input_numeros.value

    if (input_numeros.value.length == 0 || numeros.indexOf(input_numeros.value) != -1 || input_numeros.value < 0 || input_numeros.value > 100){
        window.alert('ERRO,confira os dados e tente novamente ')
    }

    else{
        numeros.push(x)
        let item = document.createElement('option')
        item.text = `Valor ${input_numeros.value} adicionado`
        analisar_numeros.appendChild(item)
    }

}

function finalizar(){
    let dados_analisados = window.document.getElementById('dados_analisados')

    if (numeros.length == 0){
        window.alert('ERRO,confira os dados e tente novamente ')
    }

    else {
        let total = numeros.length

        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media = 0

        for(let pos in numeros){
            soma += numeros[pos]

            if (numeros[pos] > maior)
                maior = numeros[pos]

            if (numeros[pos] <menor)
                menor = numeros[pos]
        }
        media = soma / total
        dados_analisados.innerHTML = ''
        dados_analisados.innerHTML += `<p> Ao todo tivemos ${total} numeros`
        dados_analisados.innerHTML += `<p> O maior valor foi ${maior}`
        dados_analisados.innerHTML += `<p> O menor valor foi ${menor}`
    }
}