const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
    const resposta = await fetch(url)
    const dados = await resposta.jason()
    console.log(dados)
}

visualizarInformacoesGlobais()