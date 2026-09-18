---
layout: base.njk
title: "virtualização, processos e fork bomb"
excerpt: "vamos escovar bits sobre sistemas operacionais partindo da seguinte pergunta: rodar um fork bomb em uma máquina virtual pode comprometer os recursos da máquina hospedeira? e no caso de estarmos usando um contêiner Docker?"
date: 2025-08-15
tags: archives
---

em maio de 2025, a OpenAI anunciou seu novo agente [Codex](https://openai.com/index/introducing-codex/), cujo diferencial é a execução paralela de tarefas, todas rodando diretamente na nuvem.

lendo sobre o Codex, comecei a refletir sobre virtualização, processos, contêineres e sobre como, muitas vezes, não paramos para observar mais de perto como certos recursos que usamos no dia a dia funcionam.

a proposta deste texto, então, é "escovar bits" sobre alguns conceitos de sistemas operacionais, partindo da seguinte pergunta: rodar um fork bomb em uma máquina virtual pode comprometer os recursos da máquina hospedeira? e no caso de estarmos usando um contêiner Docker?

## vamos dar um passo atrás

para alguns, a resposta à pergunta acima pode parecer óbvia. para outros, nem tanto. há ainda um terceiro grupo que talvez se pergunte: o que é um fork bomb?

fork bomb é uma forma de gerar processos recursivamente. e, para garantirmos que estamos todos na mesma página, vamos recorrer ao [Tanenbaum](https://pt.wikipedia.org/wiki/Andrew_Stuart_Tanenbaum) e sua definição de processo no livro [Sistemas Operacionais Modernos](https://www.amazon.com.br/Sistemas-Operacionais-Modernos-Andrew-Tanenbaum/dp/8582606168):

> _O conceito mais central em qualquer sistema operacional é o processo: uma abstração de um programa em execução [...] A ideia principal é que um processo é uma atividade. Ele possui programa, entrada, saída e um estado._

assim, ao criarmos processos de forma recursiva e indefinida, passamos a consumir os recursos do sistema operacional, o que leva eventualmente ao esgotamento desses recursos e, consequentemente, à "quebra" do sistema.

para entendermos melhor como esse esgotamento acontece, precisamos detalhar como processos são criados.

## criação de processos

Tanenbaum descreve quatro formas pelas quais um processo pode ser criado:

1. durante a inicialização do sistema;

2. através da execução de uma chamada de sistema de criação de processo por um processo em execução (este é o ponto central para entender o fork bomb);

3. a partir de uma solicitação do usuário para criar um novo processo;

4. pelo início de uma tarefa em lote (batch job).

quando um sistema operacional é iniciado, diversos processos são carregados — alguns em primeiro plano, outros em segundo. Isso é necessário para o funcionamento adequado do sistema. a partir daí, todos os novos processos passam a ser criados a partir de processos já existentes. cada processo possui informações importantes associadas, como endereçamento de memória.

o ponto crucial aqui é que, embora um processo filho compartilhe algumas informações com o processo pai (aquele que o criou), cada processo tem seu próprio espaço de memória para escrita, o que garante que não haverá interferência mútua na execução de suas tarefas. portanto, a criação de novos processos consome cada vez mais memória da máquina.

e onde entra o fork? em sistemas baseados em Unix, a chamada de sistema responsável pela criação de novos processos é justamente o fork().

agora que entendemos como os processos são criados e como o fork bomb pode causar o esgotamento de recursos, vamos analisar se isso também se aplica ao executar o fork bomb em uma máquina virtualizada.

## máquinas virtuais

uma máquina virtual (VM) é um ambiente isolado que simula um computador físico completo, permitindo a execução de múltiplos sistemas operacionais independentes em um único hardware.

o componente central da virtualização é o hipervisor (ou virtual machine monitor – VMM), que é responsável por criar e gerenciar as VMs. ele pode atuar diretamente sobre o hardware, sem necessidade de um sistema operacional intermediário, ou funcionar como uma aplicação instalada sobre um sistema operacional convencional. neste segundo caso, o hipervisor depende do sistema operacional hospedeiro para acessar os recursos de hardware.

essa segunda abordagem é adotada por softwares como o [VirtualBox](https://www.virtualbox.org/). nesses casos, como o sistema hospedeiro intermedia o acesso aos recursos, podemos limitar seu uso por parte da VM. logo, ao executarmos um fork bomb em uma máquina virtual, o consumo de recursos ficará restrito àqueles previamente configurados — o que impede o esgotamento dos recursos da máquina física.

e no caso do Docker?

## contêineres

o Docker não utiliza hipervisor — e esse é justamente o seu diferencial. enquanto as VMs simulam um computador completo em um ambiente isolado, os contêineres Docker isolam apenas os processos, utilizando o mesmo kernel da máquina hospedeira e seus recursos (abordagem _bare metal_).

portanto, um fork bomb executado dentro de um contêiner Docker pode sim consumir os recursos da máquina hospedeira e causar seu esgotamento.

## é o fim?

a explicação acima simplifica a questão ao propor a seguinte dicotomia: fork bomb em VM não é perigoso, mas em contêiner sim.

a realidade, porém, é que em ambos os cenários podemos permitir ou impedir os efeitos de um fork bomb — pois tanto VMs quanto contêineres permitem configurar limites de uso de recursos.

no fundo, o objetivo principal aqui era entender melhor os conceitos por trás da virtualização e dos processos.

para aprender como criar e se proteger de fork bombs, recomendo este [texto](https://crg.eti.br/pt-br/post/forkbomb-do-codigo-a-defesa/).

---

_embora tenha havido consulta a livros e outros materiais sobre o tema, erros conceituais podem eventualmente aparecer. fique à vontade para enviar um comentário caso identifique algum equívoco :)_