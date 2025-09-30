---
layout: base.njk
title: "Recriando o comando cat do Linux em C"
excerpt: "O projeto GNU/Linux foi construído em C e uma boa forma de aprender essa linguagem é recriando utilitários comuns desse sistema operacional."
date: 2024-02-27
tags: blog
---

No dia a dia, nós usuários de Linux costumamos utilizar uma série de programas simples, porém extremamente úteis. Um que eu utilizo com frequência é o **cat** - que nos permite exibir no terminal o conteúdo de um arquivo. Porém, você já parou para pensar em como esse programinha funciona?

Suponhamos que eu queira conferir o conteúdo do arquivo _toc_toc.txt_:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ksajx58p1pd031rad5u8.png)

Ao chamar o comando **cat** eu forneço como argumento o arquivo que eu quero exibir e, como resposta, no terminal é exibido o que o tal arquivo contem. Portanto, se quisermos recriar esse comando, o primeiro passo será receber um argumento por linha de comando.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/spizggosk3i81hpnf88t.png)

Na linha 5 nós estamos definindo dois parâmetros para a função main:

- **argc**: conta quantos argumentos foram passados pela linha de comando na hora que o programa foi executado;
- **argv**: é um vetor com todos os argumentos passados

Note que todo programa terá, no mínimo, um argumento - o nome do programa. Por isso checamos se o **argc** é menor do que 2, pois caso seja isso é um sinal de que o nome do arquivo que o **cat** deverá exibir o conteúdo não foi fornecido. Nesse caso, exibimos uma mensagem informando a maneira correta de utilizar o programa e encerramos a execução com um código de erro.

Se o programa recebeu os devidos argumentos quando foi executado, o próximo passo é abrirmos o arquivo cujo o nome foi informado.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wjtbtnm5vyfir82zlod2.png)

Fazemos isso declarando um ponteiro para um arquivo e abrindo ele em seguida.

Na linha 15 nós checamos se tudo ocorreu de forma adequada na abertura do arquivo. Caso algum problema tenha ocorrido, exibimos uma mensagem de erro e encerramos a exceução do programa.

Por fim, temos um loop que irá ler caracter por caracter do nosso arquivo até chegar ao final - exibindo esses caracteres no terminal.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/826mx4ad11eviunymg9x.png)

Após finalizarmos a leitura e exibição do conteúdo do arquivo, nós fechamos o arquivo e encerramos o programa.

Agora é só compilar e testar.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gx0iit8okcgqtovs2paq.png)

Funciona!!! 

Uma coisa importante a dizer é que a implementação do **cat** original é bem mais complexa ([código fonte aqui](https://github.com/coreutils/coreutils/blob/master/src/cat.c)) e tem 800 linhas. Porém, a ideia dessa implementação que fizemos é apenas entender como certos programas que utilizamos no dia a dia funcionam na sua forma mais básica. Aliás, apesar da nossa implementação ser muito mais simples que a original, se compararmos as saídas do nosso programa e do **cat** do Linux, vamos ver que ambos produzem a mesma saída.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rzt3z5saciitupobpwgg.png)

Tentar recriar esses utilitários de sistema operacional é uma ótima forma de dar os primeiros passos no desenvolvimento baixo nível e aprofundar os conhecimentos em linguagens como C. Por falar em baixo nível, como seria implementar o **cat** em Assembly? Eu vou fazer os meus testes e volto para te contar.

Fique bem até lá :)

