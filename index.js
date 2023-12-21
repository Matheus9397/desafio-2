// Calculadora de partidas ranqueadas

/* O que deve ser utilizado

- variáveis
- operadores 
- laços de repetição
- estrutura de decisões
- funções

Crie uma função que recebe como parãmetro a quantidade de 
vitórias e derrotas de um jogador, depois disso, retorne o
resultado para uma variável, o saldo de rankeadas deve ser feito 
através do cálculo ( vitórias - derrotas)

-se vitórias for menor que 10 = Ferro 
-se vitórias for entre 11 e 20 = Bronze 
-se vitórias for entre 21 e 50 = Prata
-se vitórias for entre 51 e 80 = Ouro
-se vitórias for entre 81 e 90 = Diamante
-se vitórias for entre 91 e 100 = Lendário
-se vitórias for maior ou igual a 101 = Imortal


Ao final, deve ser exibida uma mensagem:
" O herói tem um saldo de **{saldoVitorias}** e ele 
esta no nível de **{nivel}**  "

*/

let qtdVictories = 101;
let qtdDefeats = 15;

function saldoVitorias(qtdVictories,qtdDefeats){

    return qtdVictories - qtdDefeats;

}

function verificaNivel(qtdVictories){

if (qtdVictories<=10){
    return "Ferro";
}

else if (qtdVictories>=11 && qtdVictories<=20 ){
    return "Bronze";
}

else if (qtdVictories>=21 && qtdVictories<=50 ){
    return "Prata";
}

else if (qtdVictories>=51 && qtdVictories<=80 ){
    return "Ouro";
}

else if (qtdVictories>=81 && qtdVictories<=90 ){
    return "Diamante";
}

else if (qtdVictories>=91 && qtdVictories<=100 ){
    return "Lendário";
}

else if (qtdVictories>=101) {
    return "Imortal";

}

else

    return " O número de vitórias ou derrotas está incorreto";

}

console.log("O Herói tem saldo de: "+saldoVitorias(qtdVictories,qtdDefeats)+" e esta no bível de: "+verificaNivel(qtdVictories))