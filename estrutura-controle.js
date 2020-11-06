var nome, nota1, nota2, media;

nome = prompt("Digite o nome do aluno")
nota1 = prompt("Digite a primeira nota do aluno")
nota2 =prompt("Digite a nota 2 do aluno")

media = (parseInt(nota1) + parseInt( nota2)) /2

if (media >= 50) 
    alert("Aprovado!" + nome)
    //Se tivesse mais um item como por exemplo if(media >=8) alert("Aprrovado!"Parabens) teria que se colocar chaves{}/* 
    
else

    alert("Reprovado!" + nome)