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

if (imc < 18.5) {
    clasificação = "Magro"
}
if else (imc < 25) {
    classificação = "Normal"
}
if else (imc < 30) {
    classificação = "Sobre peso"
    grau = 1    
}
if else (imc <40) {
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







