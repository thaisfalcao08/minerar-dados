const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function vizualizarInformacaoGlobais(){
    
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
    const pessoasNomundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round ( ( dados.tempo_medio - horas)*100)


 const paragrafo = document.createElement('p')   
 paragrafo.classList.add('graficos-container__texto')   
 
 paragrafo.innerHTML = `Você sabia que o mundo tem 
 <span> ${pessoasNomundo}  </span> de pessoas e aproximadamente
 <span> ${dados.total_pessoas_conectadas}  </span> estão conectadas em alguma rede social e passam em media
 <span> ${horas} </span> : <span> 38 </span> horas conectados`

const container = document.getElementById("graficos-container")
container.appendChild(paragrafo)

}

vizualizarInformacaoGlobais();