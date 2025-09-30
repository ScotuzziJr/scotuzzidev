---
layout: base.njk
title: "Aprenda padrões de projeto, mas não se apegue às implementações"
excerpt: "Padrões de projetos são ferramentas poderosas no desenvolvimento de software, mas copiá-los cegamente é pior do que não usá-los."
date: 2025-05-23
tags: blog
---

A máxima "você não é o primeiro a passar por isso" se aplica muito bem à programação e, por isso, um bom ponto de partida para resolver um problema é ver como outras pessoas o solucionaram antes de você.

Antes das IAs generativas, o lugar para onde todo dev corria ao pedir ajuda na internet era o Stack Overflow. Em todo o tempo que uso esse site, publiquei pouquíssimas perguntas lá — não por ter lidado com poucos bugs, mas porque a grande maioria das dores de cabeça que tive foram dores de cabeça que outras pessoas já tinham tido, e isso estava muito bem documentado, tanto no Stack Overflow quanto em outros fóruns.

Na engenharia de software, a necessidade de documentar problemas recorrentes e as boas formas de resolvê-los deu origem aos padrões de projeto.

Citando o site **[Refactoring Guru](https://refactoring.guru/design-patterns)**:

>"_Design patterns are **typical solutions to common problems** in software design._"

Aqui é importante destacar que tais soluções são abordagens comuns para resolver esses problemas, mas não devemos nos apegar à implementação exata. O ideal é avaliar como podemos usar esses padrões para resolver os problemas específicos dos sistemas que desenvolvemos.

### Um exemplo real

Atuando como desenvolvedor em uma empresa de crédito, precisei implementar uma funcionalidade de simulação de crédito rural. Sem entrar em detalhes das regras de negócio, o cenário era o seguinte:

- O frontend enviava três informações: o tipo de simulação (mensal, trimestral, semestral), o valor simulado e uma taxa opcional (caso não fosse fornecida, cada tipo de simulação tinha uma taxa padrão definida);

- Meu backend realizava o cálculo e retornava as informações necessárias, como o ID da simulação, valor da parcela etc.

Meu primeiro pensamento foi usar uma factory, um padrão creacional em que subclasses herdam de uma classe pai que define uma estrutura geral (como métodos), sem se preocupar com a implementação específica de cada uma.

No caso das simulações, a classe pai poderia definir um método para o cálculo das parcelas, e cada uma das três subclasses implementaria esse método de acordo com suas especificações.

Como um bom júnior, caí de cabeça no código e, em pouco tempo, percebi que estava usando _Ctrl+C_ e _Ctrl+V_ demais.

O problema era que a lógica para calcular o valor das parcelas era a mesma; eu só mudava os parâmetros de taxa e prazo com base no tipo de simulação. Ou seja, não precisava de três subclasses implementando o mesmo método da mesma forma. O que eu realmente precisava era instanciar uma única classe com parâmetros diferentes.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lnc6619ln2bsoasi01pg.png)

Essa foi a solução a que cheguei. Talvez exista uma forma melhor de resolver esse problema — mas o fato é que meus testes passaram, a comunicação com o frontend funcionou, e eu precisava entregar a task. Então subi assim mesmo.

Em resumo, a mensagem que fica é: devemos sim estudar os padrões de projeto, mas é sempre importante parar um minuto para aplicá-los da forma que melhor se encaixe no nosso código — caso contrário, eles mais atrapalham do que ajudam.