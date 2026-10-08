const votarx = document.getElementById("btnVotarx")
const votary = document.getElementById("btnVotary")
const resultado = document.getElementById("btnResultado")
let contadorx = 0
let contadory = 0


votarx.addEventListener("click",function(){
    contadorx += 1
})
votary.addEventListener("click", function(){
    contadory += 1
})

let votototal = contadorx + contadory

let porcentagemx = (contadorx / votototal) * 100
let porcentagemy = (contadory / votototal) * 100



resultado.addEventListener("click",function(){
    alert("o resultado da votação foi x = " + contadorx + " e y= " + contadory)
})


