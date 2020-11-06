/*
Var
// Seção de Declarações das variáveis
 nota1, nota2,media:real
 nome:caractere
 passou: logico


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   passou:= falso
  escreval("Digite o nome do aluno: ")
  leia(nome)
   escreval("Digite a primeira nota do aluno:", nota1)
   leia(nota1)
   escreval("Digite a segunda nota do aluno:", nota2)
   leia(nota2)
   media := nota1 + nota2) /2

  se media >=50 entao
  passou:= verdadeiro
  fimse
  
  se (!passou ) e (media >= 50 || <= 70) entao
     escreval("Aprovado!", nome)
  senao
       escreval("Reprovado!", nome)
  fimse

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 


Fimalgoritmo
*/

var nome, nota1, nota2, media, passou;

passou = false;
nome = prompt("Digite o nome do aluno")
nota1 = prompt("Digite a primeira nota do aluno")
nota2 =prompt("Digite a nota 2 do aluno")

media = (parseInt(nota1) + parseInt( nota2)) /2

if (media >= 50)
passou= true;
    

    //Se tivesse mais um item como por exemplo if(media >=8) alert("Aprrovado!"Parabens) teria que se colocar chaves{}/* 
    
else

    alert("Aprovado!" + nome)

    if (passou &&( media>= 70 && media<=90))
        alert("Reprovado" + nome)
    
        //Se tivesse mais um item como por exemplo if(media >=8) alert("Aprrovado!"Parabens) teria que se colocar chaves{}/* 
        
    else
    
        alert("Reprovado!" + nome)
    