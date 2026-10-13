
const votarx = document.getElementById("btnVotarx")
const votary = document.getElementById("btnVotary")
const resultado = document.getElementById("btnResultado")
const tela = document.getElementById("resultadoVotacao")

async function votar(candidato) {
    try {
        const resposta = await fetch("/votar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ candidato })
        })

        if (!resposta.ok) {
            throw new Error("Erro ao registrar voto")
        }

        tela.innerHTML = "Voto registrado!"
    } catch (erro) {
        tela.innerHTML = "Erro ao registrar voto"
    }
}

votarx.addEventListener("click", function(){
    votar("x")
})

votary.addEventListener("click", function(){
    votar("y")
})

resultado.addEventListener("click", async function(){
    try {
        const resposta = await fetch("/resultado")

        if (!resposta.ok) {
            throw new Error("Erro ao consultar resultado")
        }

        const dados = await resposta.json()

        let contadorx = dados.x
        let contadory = dados.y
        let votototal = contadorx + contadory

        if (votototal === 0) {
            tela.innerHTML = "Nenhum voto registrado"
            return
        }

        let porcentagemx = (contadorx / votototal) * 100
        let porcentagemy = (contadory / votototal) * 100

        tela.innerHTML = `
            <h2>Resultado da votação</h2>
            <p>Candidato X: ${contadorx} votos - ${porcentagemx.toFixed(2)}%</p>
            <p>Candidato Y: ${contadory} votos - ${porcentagemy.toFixed(2)}%</p>
            <p>Total de votos: ${votototal}</p>
        `
    } catch (erro) {
        tela.innerHTML = "Erro ao consultar resultados"
    }
})
