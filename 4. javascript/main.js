// Teste de operadores
/**
 * Outro tipo de comentário
 */


function eMaiorQue(valor1, valor2) {
    return valor1 > valor2;
}

/**
 * Verifica qual variável tem o menor valor
 * @param valor1
 * @param valor2
 */
function eMenorQue(valor1, valor2) {
    return valor1 < valor2;
}

function eMaiorOuIgualQue(valor1, valor2) {
    return valor1 >= valor2;
}

function estaEntreIntervalo(valor1) {
    return valor1 >= 10 && valor1 <= 100;
}

function textosSaoIguais(texto1, texto2) {
    return texto1.toLowerCase() == texto2.toLowerCase() //Caixa baixa (tudo minusculo)
    //.toUpperCase() //Caixa alta (tudo maiusculo)
}

function verificaAlunoPassou(nota1, nota2, nota3) {
    if (nota1 == 0 || nota2 == 0 || nota3 == 0) {
        console.log('Aluno reprovado')
        return 0;
    }
    else {
        //return Math.round((nota1 + nota2 + nota3) / 3, 2);
        return (nota1 + nota2 + nota3) / 3;
    }
}



// //Tipos de console log
// console.log('') //Apóstrofo
// console.log("") //Aspas
// console.log(``) //Crase

/**
 * Atalhos úteis:
 * 
 * Ctrl + K + C = Comenta trecho de código
 * 
 * Ctrl + K + U = Descomenta || || ||
 */

// console.log(`O valor 15 é maior que 150?\n ${eMaiorQue(15, 150)}`)

// console.log('O valor 15 é maior que 150?\n' + eMaiorQue(15, 150))

// console.log(`O valor 15 é maior que 150?\n ${eMenorQue(15, 150)}`)

// console.log(`O valor 15 é maior ou igual que 15?\n ${eMaiorOuIgualQue(15, 14)}`)

//console.log(`O texto " dionei " é igual à "Dionei"?\n ${textosSaoIguais("dionei", "Dionei")}`)

console.log(`Media da nota do aluno daniel: '${verificaAlunoPassou(7, 3, 9)}'`);

