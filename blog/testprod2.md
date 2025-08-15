---
layout: base.njk
title: "Testando em Prod 2 - Um livro e um projeto open source"
excerpt: "Como um livro publicado em 1999 ainda é capaz de influenciar a forma como olhamos para métodos de engenharia de software? E como esse livro me inspirou a tirar um projeto do papel?"
date: 2025-08-16
tags: blog
---

Em 1999, Eric Raymond publicou um ensaio sobre métodos de Engenharia de Software. Partindo de observações sobre o projeto do Linux, Raymond conseguiu mapear pontos-chave que, na sua visão, estão relacionados com o sucesso de muitos outros projetos. Não só isso, Raymond comprovou sua tese administrando um projeto open source chamado Fetchmail.

Na década de 90, o senso comum ditava que um projeto de software bem-sucedido deveria ser planejado e documentado antes do início de sua construção. Tal qual uma catedral. Até que Linus Torvalds anuncia o projeto do Linux, onde qualquer pessoa do mundo poderia contribuir, quase como um bazar comunitário.

Ninguém acreditava que um sistema operacional de código aberto pudesse competir com empresas como a Microsoft – que na época já havia lançado o Windows comercialmente. Eu não preciso dizer que as coisas aconteceram de um jeito diferente do esperado.
O ensaio do Raymond se chama “A catedral e o Bazar” e eu li pela primeira vez por acaso – um acaso feliz. Porque esse livro foi a inspiração para o meu projeto open source, batizado de “The Bazaar”, primeiro como uma homenagem e depois por ser um projeto que tem tudo a ver com o que esse livro nos ensina. 

	
O texto original de Raymond tem cerca de vinte páginas, que depois foram complementadas com outros ensaios resultando em um livro. Ao longo dessas páginas, ele discorre sobre as dezenove lições que aprendeu e que, posteriormente, se tornaram guidelines para a comunidade open source. A primeira delas é: todo bom projeto de software começa colocando o dedo na ferida de um programador.
	
No meio da graduação eu senti que já tinha aprendido coisa o suficiente para começar a contribuir para projetos open source. Como a maioria das pessoas, iniciei minha busca pesquisando no Google “projetos open source para contribuir”. Até então, os principais resultados eram artigos em blogs listando os mesmos projetos: Linux, OpenCV, Ansible, SerenityOS, para citar alguns. O problema é que esses projetos possuem uma base de código gigante, com um milhão de issues abertos, além de serem complexos. O que aconteceu? Eu assumi que precisava comer mais arroz e feijão antes de querer me envolver com open source.
	
Uma dúvida, porém, ficou na minha cabeça: será mesmo que não existem projetos menores, menos intimidadores, nos quais eu possa colaborar? Essa foi a ferida para que o The Bazaar fosse idealizado. A proposta dessa “rede social aberta” é ajudar pequenos projetos a construir uma comunidade interessada em contribuir ao mesmo tempo que permite iniciantes a darem os primeiros passos dentro do open source.

Tudo lindo até aqui, até eu esbarrar com minha maior inimiga: a procrastinação. Eu desenhei o MVP, implementei o microsserviço de autenticação, criei telas de login e cadastro e parei por aí. Sempre surgia uma nova necessidade de reformular os models, os services, a forma como os componentes seriam renderizados etc. Em pouco tempo, joguei o projeto na gaveta sem ter desenvolvido quase nada. O que nos leva à outra lição do Raymond: entregue cedo, entregue com frequência – e ouça os usuários.

Dois anos depois, agora em 2025, eu me debrucei sobre o The Bazaar e construí a versão zero em pouco mais de uma semana. Nesse momento, o projeto é uma aplicação Django, que usa Django Templates como frontend, Bootstrap para estilização e um banco de dados Postgres simples. Por ser um MVP, o deploy foi feito usando o free tier do Render e a base de usuários consiste em: eu, minha namorada e meu amigo. E olha, três usuários já foram o bastante para eu notar duas coisas importantes: a aplicação pelo celular não responde ao toque de um dropdown no menu superior (minha namorada descobriu). Além disso, os arquivos estáticos, como fotos de perfil, não persistem em disco dentro do Render – algo que eu notei ao ver que minha foto sumia sempre que eu fazia um novo deploy. Embora só existam três usuários, já deu para receber feedback de melhorias e, para mim, esse já é um começo promissor. Amarrando com o que eu comentei antes sobre procrastinação, software não evolui na cabeça do programador, mas sim na mão de quem usa. O que nos leva para uma outra lição: trate os usuários como co-desenvolvedores.

Se você acessar o The Bazaar, vai ver que o próprio The Bazaar é um dos projetos listados. Afinal, se a motivação dessa rede social é resolver o problema de devs interessados em open source, nada mais justo que fazer disso um projeto open source para que esses devs possam contribuir.

Hoje eu lanço o The Bazaar oficialmente. Não em sua versão final, tal qual uma catedral imponente, mas sim como um bazar aberto ao público, que precisa do envolvimento das pessoas para continuar funcionando. Esse projeto está sendo lançado como uma proposta de um espaço para a criação de comunidades, troca de conhecimentos e interação entre pessoas que gostam de construir coisas. Eu não quero que o The Bazaar se torne apenas uma vitrine para projetos open source – embora trazer visibilidade para pequenos projetos seja algo importante. Porém, mais do que isso, o foco é desenvolver uma rede social com propósito, indo contra a maré de dopamina barata que a gente recebe sempre que encara os feeds infinitos. 

Correndo o risco de contradizer tudo o que eu falei: o The Bazaar é menos sobre projetos open source e mais sobre pessoas.