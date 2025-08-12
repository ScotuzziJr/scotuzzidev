---
layout: base.njk
title: "Pipeline ETL de dados do Distrowatch"
excerpt: "Uma pipeline ETL construída com Python e Apache Airflow para extrair dados do DistroWatch sobre distribuições Linux."
date: 2025-08-12
tags: portfolio
---

# ETL Pipeline — DistroWatch Data

## Visão Geral

Este projeto é um **ETL Pipeline** feito com **Python** e **Apache Airflow** para extrair, transformar e carregar dados do [DistroWatch](https://distrowatch.com).  
O objetivo é organizar e analisar tendências, histórico de lançamentos e metadados de distribuições Linux.

**Tecnologias usadas:**
- **Airflow** — orquestra e agenda as tarefas ETL.
- **Python** — scripts para extração, limpeza, transformação e carregamento.
- **Código modular** — facilita manutenção e testes.
- Design preparado para integrar novos conectores ou fontes de dados.


## Funcionalidades

- **Workflows automatizados** com Airflow, garantindo execução confiável.
- **Dados limpos e padronizados** para análise ou armazenamento.
- **Agendamento configurável** — permite execução periódica.
- **Logs e tratamento de erros** para fácil monitoramento.

## Arquitetura

1. **Extração** — coleta dados do DistroWatch via web scraping.
2. **Transformação** — limpa, padroniza e organiza campos como datas e nomes.
3. **Carga** — salva dados processados em arquivos CSV.
4. **Orquestração** — Airflow gerencia ordem, tentativas e alertas.

---

## Mais detalhes

Leia o artigo completo no [LinkedIn](https://www.linkedin.com/pulse/building-etl-pipeline-distrowatch-data-part-1-m%C3%A1rcio-scotuzzi-junior-rrdtf/?trackingId=cLCy%2BzHlTf6AT1DClH%2BLMA%3D%3D)

Veja o projeto no GitHub: [ETL Pipeline — DistroWatch Data](https://github.com/ScotuzziJr/etl-pipeline-distrowatch)
