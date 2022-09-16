## Questions and answers
```bash
#1. Cite 2 exemplo de técnicas de planejamento de testes ?
Mind Map and Pareto Principle.

#2. Cite 3 exemplos de artefatos/documentos possíveis para a modelagem de testes?
Mind Map, checklist and diagrams.

#Lógica de programação(Aula04-Variáveis)

nomeComplete = "Daniel Beilke dos Santos"
apelido = "Dani"
idade = "22"
dataNascimentos = "08/07/2000"
localNascimento = "São Leopoldo"
altura = "1,75"
trabalho = "desempregado"

apresentação = " Meu nome é " + nomeCompleto + " (Sou conhecido como " + apelido + " ) e tenho " + idade + " nasci no dia " + dataNascinento + ", na cidade de " + localNascimentos + " tenho " + altura +,"m de altura e atualmente estou " + trabalho +  "."

#Crie uma variável mesmoNome que verifica se nomeDoFulano é igual a nomeDoBeltrano:
mesmoNome = (nomeFulano == nomeBeltrano).

#Crie uma variável maiorDeIdade que verifica se idade é de um adulto:
maiorDeIdade = (idade >=).

#Crie uma variável valorComJuros que calcula o valor de um boleto acrescido de 10% de juros por atraso:
valorComJuros = (valorBoleto * 1.1).

#Faça a representação da fórmula de média aritmética, considerando um conjunto de elementos com 5 elementos nomeados como item1, item2, item3, item4 e item5:
aritmética = (item1 + item2 + item3 + item4 + item5) /5

#O lucro bruto de uma empresa é representado pela receita líquida de vendas menos o custo dos produtos vendidos. A margem bruta de uma empresa é calculada pela divisão do lucro bruto pela receita líquida de vendas. Faça a representação da fórmula da margem bruta, multiplicando o resultado final por 100 para obter o valor percentual:

lucroBruto = receitaLiquida - produtosVendidos
margemBruta = (lucroBruto / receitaLiquida) *100

#O saldo da sua conta é R$ 1000,00
Você decide comprar uma calça por R$ 99,90
Você recebe o seu salário de R$ 2500,00
Você está caminhando na rua e decide dar R$ 0,10 para um morador de rua
Você compra um ar condicionado cujo valor é 25% do seu saldo atual
Você decide antecipar o pagamento de uma dívida usando metade do seu saldo
Qual o valor do seu saldo?

saldo = 1000
saldo = saldo - 99.9
saldo = saldo + 2500
saldo = saldo - 0.1
saldo = saldo * 0.75
saldo = saldo / 2
console.log(saldo)
Saldo = 1275

#Faça um algoritmo que efetue o cálculo do IMC, com base nas variáveis peso e altura:

altura = 1.75
peso = 87

imc = peso / (altura * altura)

classificação = ""
grau = "0"

if (imc < 18.50) {
    clasificação = "Magro"
}
if else (imc < 24.90) {
    classificação = "Normal"
}
if else (imc < 29.90) {
    classificação = "Sobre peso"
    grau = 1    
}
if else (imc <39.90) {
    classificação = "Obesidade"
    grau = 2
}
else {
    classificação = "Obesidade grave"
}

console.log("Seu IMC é", imc)
console.log("Vocé é considerado", classificação)

if (grau > 2) {
    console.log("Cuidado! Você está acima do peso recomendado pela OMS.")
}
    if (grau == 3) {
        console.log(""É importante procurar um médico para avaliar sua saúde.)
    }

#Crie um array de 5 posições com quaisquer valores. Utilize qualquer estrutura de repetição apresentada no vídeo para exibir todos os valores do array:

num = 1
while(num <=5){
    console.log(num)
num++
}



num = 1
do{
console.log(num++)

}while(num=<=20)



for(num = 5; num <=20; num++){
    console.log(num)
}

#Crie um algoritmo capaz de calcular a média aritmética de um array com qualquer quantidade de elementos numéricos. Para fins de exemplo, o resultado do algoritmo com um array de valores 1, 2, 3, 5, 8, 13, 21, 23, 34, 55 deve ser 16.5. Procure usar uma estrutura de repetição diferente da que você usou para fazer o exercício anterior:

valor = [1, 2, 3, 5, 8, 13, 21, 23, 34, 55]
soma = 0

for (soma = 0; soma <valor.lenght; soma++) {
    soma + valor
}
media = soma / valor.lenght
console.log(media)


#Considerando a lista dos 60 nomes mais comuns no Brasil nos últimos 10 anos, crie um algoritmo para verificar se seu nome está lá. Se sim, exiba a mensagem: É, nome comum :P. Se não, exiba a mensagem: Diferentão, hein? XD.

meuNome: Daniel

nomesComuns = ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
"Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
"Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
"Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
"Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
"Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

for (index = 0; nomesComuns,lenght; index++){
    if (meuNome == nomesComuns) 
    nomeComum = true }

if (nomeComum){
    console.log("É, nome comum :P")
}
    else {
        console.log("Nome diferentão, hein ? XD")
    }

#Crie uma função chamada imprimir que recebe um argumento e simplesmente imprime ele na tela; 

function imprimir(text){
    console.log(imprimir)
}

#Lembra dos exercícios que propusemos na Aula 05 - Variáveis? Com base neles, faça o seguinte:


    *Crie uma variável mesmoNome que verifica se nomeDoFulano é igual a nomeDoBeltrano:
/*Verificar se os nomes são iguais.*/
function mesmoNome(nomeDoFulano, nomeDeBeltrano){
    return NomeDoFulano == nomeDeBeltrano
}



    *Crie uma variável maiorDeIdade que verifica se idade é de um adulto:

/*Verificar se são maioridade*/
function maiorDeIdade (idade){
    return idade >= 18
} 


    *Crie uma variável valorComJuros que calcula o valor de um boleto acrescido de 10% de juros por atraso;

/*Verificar o valor do juros com 10%.*/
function valorComJutos(boleto){
    return boleto * 1.1
}


    *Faça a representação da fórmula de média aritmética, considerando um conjunto de elementos com 5 elementos nomeados como item1, item2, item3, item4 e item5:

/*Calcular a média aritmética*/
function calcularMediaAritmetica(itens){

    //Somar os itens do lenght
    for (index = 1; index < itens.lenght)
        soma += itens
    return soma / itens.lenght

}


    *Na função da média aritmética, evite colocar todos os itens como argumentos do método, pois isso limitaria sua utilização a um número fixo de elementos. Tente implementar uma lógica para receber um array e calcular a média em cima dele, tornando a função mais reaproveitável em diferentes situações:

function margemBrutal (vendasLiquidas, produtosVendidos) {
    lucroBruto = vendasLiquidas - prdutosVendidos
    return (lucroBrutos / vendasLiquidas) *100
}

##

colaboradores    = ['Rhoger', 'Cléverson', 'Gleysberto', 'Nádio', 'Rosiméri', 'Regislane', 'Agripino', 'Wellison']
idades           = [      69,          66,           58,      61,         60,          64,         59,         55]
temposDeTrabalho = [      31,          29,           30,      26,         25,          24,         26,         29]

/*Ter pelo menos 65 anos de idade;
Ter trabalhado no mínimo 30 anos;
Ter pelo menos 60 anos de idade e 25 anos de trabalho.*/

function verificarAposentadoria(nome) {
    colaborador = false
    idade = 0
    trabalho = 0
}

    for (posição < colaboradores.lenght) {
        if (nome == colaborador)
        colaborador = true
        idade = idade
        tempoDeTrabalho = tempoDeTrabalho
    }

        // Colaborador pode se aposentar
    if (porIdade || porTempoDeTrabalho || porIdadeComTempoDeTrabalho) {
        console.log("Parabéns, já pode sair de férias para sempre")
    }   
    else {
        console.log("Ainda falta um tempinho")
    }

    else {
        console.log("Colaborador inválido")
    }




















