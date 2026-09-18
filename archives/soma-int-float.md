---
layout: base.njk
title: "por que a soma de um int com um float resulta em um float?"
excerpt: "ao aprender programação, nós aceitamos certas ideias como verdade sem entender de fato o que está por trás delas."
date: 2024-02-18
tags: archives
---

## introdução

dentro da computação, **compiladores** é um dos meus assuntos favoritos. eles são programas responsáveis por traduzir um código escrito em certa **linguagem fonte** para uma outra **linguagem alvo**. geralmente, a linguagem alvo é o conjunto de instruções que o processador da sua máquina é capaz de executar. Além disso, o compilador é o cara responsável por exibir mensagens de erro horrorosas toda vez que a gente faz alguma merda no nosso código (e não adianta mentir, eu sei que você já passou por isso).

compiladores são fascinantes por si só, mas uma coisa legal sobre estudar esses softwares é o fato de precisarmos resgatar ou aprender sobre conceitos de **arquitetura de computadores**, **sistemas operacionais**, **estruturas de dados** etc. não só isso, nós nos vemos obrigados e pensar sobre algumas coisas que no dia a dia costumam passar batido. Por exemplo: **por que somar um inteiro com um número de ponto flutuante sempre resulta em um número de ponto flutuante?**

## entendendo tipos de dados

você já deve ter estudado os **tipos de dados** de alguma linguagem: int, float, char, boolean, entre outros. Porém, você já se perguntou **o que exatamente são os tipos de dados?** 

um tipo de dado nada mais é do que **um conjunto de valores que uma variável pode assumir** e esse conjunto de valores, por sua vez, **compartilham de operações comuns entre eles.** logo, dizer que os valores 17 e 42 são do tipo inteiro, significa que eles pertencem ao mesmo conjunto de valores que uma variável inteira poderá assumir justamente por eles compartilharem as mesmas operações - por exemplo, a soma. 

quando computamos a expressão `17 + 42` estamos somando esses dois valores (e obtendo o resultado 59). Vale dizer que **um mesmo operador **(nesse caso, +) **pode representar diferentes operações.** ao computar `"olá, " + "mundo!"` nós não estamos realizando uma soma, mas sim uma concatenação - **embora o operador seja o mesmo, a operação é outra.** Como resultado teríamos "olá, mundo!". E se tentarmos usar o operador + com um inteiro e uma string? **Obtemos um erro.**

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uj57fdasbn80wutigdh0.png)

no exemplo acima estamos trabalhando com a linguagem Python e você pode reproduzir esse exemplo no próprio IDLE do Python. note que quando uma string é o primeiro argumento fornecido para o operador +, o erro diz que só é permitido concatenar uma string com outra string. já quando o primeiro argumento é um inteiro, o erro diz que o tipo de dado dos operandos não são suportados pelo operador. em ambos os casos, a nossa tentativa é falha, justamente porque, sendo de tipos diferentes, **inteiros e strings não compartilham das mesmas operações.**

agora você deve estar pensando, **se inteiros e números de ponto flutuante são de tipos diferentes, por que conseguimos somá-los?**

## entendendo type casting

se você já estudou os tipos de dados de alguma linguagem, então deve ter estudado também sobre _type casting_ (ou conversão momentânea de tipos). basicamente, é quando nós **convertemos o tipo de um dado por um instante**. se você já estudou Python, deve ter se deparado com isso:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/259khorb5y97qycc0cci.png)

o que aconteceu aqui? simples! por padrão, a função input trata todos os dados como string (exatamente o que eu faço quando vou modelar uma tabela no banco de dados e fico com preguiça de definir o tipo certo para cada coluna). como já vimos antes, o operador + quando aplicado sobre strings realiza a operação de concatenação, logo, `"17" + "42"` só pode resultar em 1742. e como lidar com isso? assim:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/511la1ty0kf907a45mm7.png)

nós usamos a função int para converter o tipo de dado de string para inteiro. note que **isso só foi possível porque a string continha uma representação numérica** - experimenta digitar uma letra para ver se o interpretador não grita com você. 

outra coisa importante a se dizer: **a conversão de tipos é momentânea** e, caso queira persisti-la, deve-se armazenar o dado em uma variável ao realizar a conversão. 

portanto, quando somamos um número inteiro com um número de ponto flutuante, o que acontece é um _type casting_ do int para float. a imagem abaixo mostra um exemplo de como os tipos de dados seguem os mesmos e o casting só ocorre na hora da operação.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ycplesy613m296dyzaw3.png)

repara em como x se mantem sendo um int, mesmo que para computar o valor de z ele tenha sido convertido para um float.

e sim, eu sei que você já chegou nessa conclusão do _type casting_ sozinho, mas o que talvez não tenha ficado evidente é: **por que isso acontece?**

## sejamos precisos (tanto quanto se pode)

eu pretendo escrever um texto só para discutir representação de números de ponto flutuante, mas a densidade desse assunto é proporcional a sua beleza. portanto, vamos definir algumas coisas mais triviais apenas para podermos responder a pergunta inicial.

**operações com números inteiros são realizadas em uma região diferente das com números reais.** para a primeira, temos a **ALU** e para a segunda temos a **FPU**. isso acontece porque **nós não representamos números inteiros da mesma forma que representamos números de ponto flutuante.** quando a conversão de tipos ocorre ao somamrmos um int e um float, a escolha de converter o int para um float e não o contrário, está relacionada justamente com manter a precisão dos valores - pois **representar um inteiro como um número real é mais propenso a manter a precisão do que representar um número real como inteiro.** loucura né?

em resumo, quando somamos `17 + 42.0` a **ALU** vai se encarregar de transformar essa representação inteira para uma representação de ponto flutuante e irá chamar a **FPU** para realizar a operação. **o resultado final acaba sendo um float porque quem computou o valor foi a FPU** - que só trabalha com números de ponto flutuante.

## conclusão

ufa! parece que chegamos ao fim. talvez a minha explicação não tenha sido a melhor ou a mais completa. além disso, talvez eu tenha cometido algum erro conceitual no caminho. para ambos os casos, sinta-se livre para deixar um comentário. 

no mais, estou indo embora. 

fique bem e até :)
