---
layout: base.njk
title: "Análise da presença feminina no ensino superior em computação no Brasil"
excerpt: "Análise dos microdados do Ensino Superior no Brasil com o objetivo de entender a presença feminna na graduação, sobretudo nas áreas de computação."
date: 2025-09-22
tags: portfolio
---

# Análise da presença feminina no ensino superior em computação no Brasil

### O contexto

Em 2022, o IBGE publicou a 3ª edição das [Estatísticas de Gênero: indicadores sociais das mulheres no Brasil]([Estatísticas de Gênero - Indicadores sociais das mulheres no Brasil | IBGE](https://www.ibge.gov.br/estatisticas/multidominio/genero/20163-estatisticas-de-genero-indicadores-sociais-das-mulheres-no-brasil.html), com dados que apontavam a baixa presença feminina em cursos superiores na área de tecnologia. 

Não só isso, de 2012 para 2022 o percentual de mulheres concluintes do curso de Ciência da Computação caiu de 17,5% para 15%, de acordo com o [Censo da Educação Superior]([Resultados — Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira | Inep](https://www.gov.br/inep/pt-br/areas-de-atuacao/pesquisas-estatisticas-e-indicadores/censo-da-educacao-superior/resultados)).

Historicamente, as mulheres contribuíram para avanços significativos dentro da área de computação. **Grace Hopper** foi pioneira no estudo de compiladores, definindo bases que norteram o desenvolvimento de linguagens de programação; sem o trabalho de **Radia Perlman** e sua importante invenção, o *STP*, a internet como conhecemos não seria viável; **Barbara Liskov**, além de contribuir para princípios de desenvolvimento de software, também foi um nome importante no estudo de sistemas distribuídos tolerantes à falhas. Sem falar, é claro, de **Ada Lovelace**, considerada a primeira pessoa programadora do mundo.

A pergunta que surge, então, é: em um país onde as mulheres são as que mais recebem diploma de ensino superior, por que elas não estão nas salas de aulas de cursos como Ciência da Computação?

---

### A análise

O objetivo desse projeto de análise de dados é responder algumas perguntas sobre a presença feminina no ensino superior em computação no Brasil. A base de dados analisada  é a de [Microdados do Censo da Educação Superior]([Censo da Educação Superior — Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira | Inep](https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior)), disponibilizada publicamente pelo **INEP** e o portal de dados do **Governo Federal**. O período analisado é de 2020 a 2023 - uma janela de 4 anos desde o último ano que a pesquisa foi divulgada. Olhar para diferentes anos permite entender como os dados variaram ao longo do tempo.

**Perguntas e hipóteses**

Todo projeto de análise de dados precisa, além de um recorte, de hipóteses que servem como guia para a análise e perguntas que ditam como os dados serão explorados. Dentro do recorte já apresentado, a análise pode ser dividida em duas perguntas principais, uma de caráter mais amplo e outra mais específica:

- Como evoluiu a presença feminina no ensino superior brasileiro ao longo dos últimos anos?

- Como está a presença de mulheres em cursos de computação, historicamente dominados por homens?

A partir dessas perguntas, podemos formular hipóteses sobre o tema:

- A proporção de mulheres matriculadas no ensino superior aumentou nos últimos anos

- A proporção de mulheres em cursos de computação permanece abaixo de 25% nos últimos anos

---

### Visão geral

Começar com uma visão macro e afunilar para detalhes mais específicos permite construir gradativamente um melhor entendimento do tema. Portanto, o primeiro passo na análise será olhar para a proporção de ingressantes do sexo masculino e feminino nos últimos anos.

<img src="/portfolio/imgs/distribuicao-ingressantes-es.png" title="" alt="distribuicao-ingressantes-es.png" data-align="center">

                                            *Fonte: autoria própria*

Nota-se uma prevalência das mulheres no ensino superior, com uma diferença de 17,6% em relação aos homens; um número expressivo. Uma análise comparativa dos últimos anos permite responder a primeira hipótese dessa análise.

<img src="/portfolio/imgs/evolucao-proporcao-ingressantes.png" title="" alt="evolucao-proporcao-ingressantes.png" data-align="center">

                                            *Fonte: autoria própria*

A proporção de mulheres matriculadas no ensino superior aumentou nos últimos anos. 

Em relação aos cursos de computação, porém, quais são os números?

Os 4 principais cursos da área de tecnologia são:

- Ciência da Computação

- Engenharia de Computação

- Análises e Desenvolvimento de Sistemas

- Sistemas de Informação

Portanto, a amostra analisada levará em consideração os dados referentes à esses cursos.

<img src="/portfolio/imgs/proporcao-cursos-computacao.png" title="" alt="proporcao-cursos-computacao.png" data-align="center">

                                            *Fonte: autoria própria*

A diferença entre homens e mulheres nos cursos de computação é discrepante, o que sustenta a hipótese de que a proporção de mulheres em cursos de computação permanece abaixo de 25% nos últimos anos. O gráfico abaixo permite olhar com maior detalhe.

<img src="/portfolio/imgs/evolucao-mulheres-computacao.png" title="" alt="evolucao-mulheres-computacao.png" data-align="center">

                                            *Fonte: autoria própria*

O percentual mais alto da presença feminina em cursos de computação foi no curso de Análise e Desenvolvimento de Sistemas, que atingiu 21% em 2022 e manteve o mesmo percentual em 2023, seguido por Sistemas de Informação que, em 2023, também atingiu a marca de 21%.

Embora a presença feminina em cursos de computação no Brasil seja significativemnte menor do que a presença masculina, o padrão observado é de uma crescente. Ainda existe esperança.

---

### Reflexões

O papel social frequentemente atribuído às mulheres envolve atividades voltadas à educação e ao cuidado. O mesmo relatório do **IBGE** que aponta a baixa presença feminina em cursos de formação **CTEM (Ciência, Tecnologias e Matemática)**, mostra como elas são a maioria nas áreas de saúde e ensino. 

A escolha de uma profissão é muito pessoal, ou em teoria deveria ser. A verdade é que pesquisas recentes mostram que a escolha da profissão é influenciada, muitas vezes de forma inconsciente, pelas áreas e atividades às quais o indivíduo é exposto desde a infância e adolescência. O ambiente familiar, social e escolar exerce papel fundamental na formação da identidade profissional, onde expectativas e valores são transmitidos, muitas vezes moldando as escolhas profissionais dos jovens antes mesmo deles terem maturidade plena para decidir.

Ao olhar para o ensino de base, nota-se que a presença de meninas em olímpiadas de matemática, robótica e programação ainda é menor que a presença de meninos. Um motivo possível pode ser a falta de incentivo e, partindo dessa suposição, isso explica os baixos números de mulheres no ensino superior em áreas de computação. Iniciativas como o **Movimento Meninas Olímpicas** busca incentivar a participação de meninas em atividades voltadas para áreas **CTEM** ao longo do ensino fundamental e médio. Ações como essa podem ser cruciais para que, nos próximos anos, mais mulheres optem por seguir para áreas de tecnologia no ensino superior.

O **Fórum Econômico Mundial** apresentou um [relatório]([The Future of Jobs Report 2025 | World Economic Forum](https://www.weforum.org/publications/the-future-of-jobs-report-2025/)) em janeiro de 2025 listando os empregos que terão as maiores taxas de crescimento até 2030, sendo todos eles da área de computação. Portanto, é extremamente necessário a mudança dos números atuais da presença feminina no ensino superior no Brasil.

---

*O notebook com a análise completa pode ser encontrado no [repositório](https://github.com/ScotuzziJr/analise-microdados-es-brasil)*
