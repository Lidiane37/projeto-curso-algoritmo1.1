/*
sairLoping: caracter
  numero1, numero2, resultado : inteiro
  

Inicio
           repita
                 escreva("Digite o primeiro número: ")
                 leia(numero1)
                 escreva("Digite o segundo número: ")
                 leia(numero2)
                 escreval(" resultado : " , numero1 + numero2)
                 escreval("Deseja sair? S/N ")
                 leia(sairLoping)

                 ate  sairLoping <> "N"

*/

  

Inicio
function acaoBotao() {

    var 
    sairLoop, numero1, numero2

    do{
        numero1 = prompt("Digite o primeiro número: ")
        numero2 = prompt("Digite o segundo número: ")
        document.getElementById("paragrafo").innerText = " resultado : " + (parseInt (numero1) + parseInt(numero2))
        sairLoop = prompt("Deseja sair? S/N ")
        

    }while(sairLoping == "N")
    
}

