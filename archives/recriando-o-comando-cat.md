---
layout: base.njk
title: "recriando o comando cat do Linux em C"
excerpt: "o projeto GNU/Linux foi construído em C e uma boa forma de aprender essa linguagem é recriando utilitários comuns desse sistema operacional."
date: 2024-02-27
tags: archives
---

no dia a dia, nós usuários de Linux costumamos utilizar uma série de programas simples, porém extremamente úteis. um que eu utilizo com frequência é o **cat** - que nos permite exibir no terminal o conteúdo de um arquivo. porém, você já parou para pensar em como esse programinha funciona?

suponhamos que eu queira conferir o conteúdo do arquivo _toc_toc.txt_:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ksajx58p1pd031rad5u8.png)

ao chamar o comando **cat** eu forneço como argumento o arquivo que eu quero exibir e, como resposta, no terminal é exibido o que o tal arquivo contem. portanto, se quisermos recriar esse comando, o primeiro passo será receber um argumento por linha de comando.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/spizggosk3i81hpnf88t.png)

na linha 5 nós estamos definindo dois parâmetros para a função main:

- **argc**: conta quantos argumentos foram passados pela linha de comando na hora que o programa foi executado;
- **argv**: é um vetor com todos os argumentos passados

note que todo programa terá, no mínimo, um argumento - o nome do programa. por isso checamos se o **argc** é menor do que 2, pois caso seja isso é um sinal de que o nome do arquivo que o **cat** deverá exibir o conteúdo não foi fornecido. nesse caso, exibimos uma mensagem informando a maneira correta de utilizar o programa e encerramos a execução com um código de erro.

se o programa recebeu os devidos argumentos quando foi executado, o próximo passo é abrirmos o arquivo cujo o nome foi informado.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wjtbtnm5vyfir82zlod2.png)

fazemos isso declarando um ponteiro para um arquivo e abrindo ele em seguida.

na linha 15 nós checamos se tudo ocorreu de forma adequada na abertura do arquivo. caso algum problema tenha ocorrido, exibimos uma mensagem de erro e encerramos a exceução do programa.

por fim, temos um loop que irá ler caracter por caracter do nosso arquivo até chegar ao final - exibindo esses caracteres no terminal.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/826mx4ad11eviunymg9x.png)

após finalizarmos a leitura e exibição do conteúdo do arquivo, nós fechamos o arquivo e encerramos o programa.

agora é só compilar e testar.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gx0iit8okcgqtovs2paq.png)

funciona!!! 

uma coisa importante a dizer é que a implementação do **cat** original é bem mais complexa ([código fonte aqui](https://github.com/coreutils/coreutils/blob/master/src/cat.c)) e tem 800 linhas. porém, a ideia dessa implementação que fizemos é apenas entender como certos programas que utilizamos no dia a dia funcionam na sua forma mais básica. aliás, apesar da nossa implementação ser muito mais simples que a original, se compararmos as saídas do nosso programa e do **cat** do Linux, vamos ver que ambos produzem a mesma saída.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rzt3z5saciitupobpwgg.png)

tentar recriar esses utilitários de sistema operacional é uma ótima forma de dar os primeiros passos no desenvolvimento baixo nível e aprofundar os conhecimentos em linguagens como C. por falar em baixo nível, como seria implementar o **cat** em Assembly? eu vou fazer os meus testes e volto para te contar.

fique bem até lá :)