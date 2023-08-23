<p align="center">
  <a href="https://imersao.fullcycle.com.br/" target="blank"><img src="https://imersao.fullcycle.com.br/static/site/img/logo-top.png?id=43b9e8741d507c2687fddc2e4cb10d52" height="100" alt="Nestjs Logo" style="margin-right:70px"/></a>
  <a href="https://nestjs.com/" target="blank"><img src="https://docs.nestjs.com/assets/logo-small.svg" height="100" alt="Nestjs Logo" style="margin-right:70px"/></a>
  <a href="https://www.docker.com/" target="blank"><img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" height="100" alt="Docker Logo" style="margin-right:70px"/></a>
</p>

<br>

<h1 align="center">Imersao 14 - Desafio Nest.js - Fase 1</h1>

<div align="center">
Proposta da solução do desafio<br>
Desenvolvedor: Igor Lage.<br>
Prudentópolis, 22 de agosto de 2013.
</div>

## Índice

- [Informações do desafio](#informações-do-desafio)
- [Solução proposta](#solução-proposta)
- [Instalação do projeto](#instalação-do-projeto)
- [Executar o projeto em ambiente Docker](#executar-o-projeto-em-ambiente-docker)
- [Testes dos recursos da API](#testes-dos-recursos-da-api)

## Informações do desafio
"Neste desafio, você deve criar uma aplicação Nest.js com Docker que rode na porta 3000.


Esta aplicação precisa expor 2 rotas de API Rest:
- Listar routes - POST /api/routes
- Criar routes - GET /api/routes


Uma rota tem os seguintes dados:

- id (gerado automaticamente pelo MongoDB)
- name (nome da rota)
- source (sub-documento que contém lat e lng)
- destination (sub-documento que contém lat e lng)


O ORM a ser usado é o Prisma ORM e o banco de dados precisa ser o Mongo, image: bitnami/mongodb:5.0.17 ou similar

Crie o arquivo api.http para fazer as chamadas HTTP. Ao rodar o docker compose up já precisa subir logo de cara o projeto com o Nest.js rodando + o MongoDB."


## Solução proposta

Utilizamos esse material como forma de estudo, por isso, os recursos adicionados nessa API vão além das necessidades solicitadas. Além de inserir os recursos de consumo GET e POST, foi adicionado também os recursos dos verbos Delete e Patch.

A documentação Swagger também foi incluída.


## Instalação do projeto

Para instalar o projeto, execute o comando:

```yml
gh repo clone igorRL/desafio-nestjs
```

Acesse o projeto:
```yml
cd desafio-nestjs
```

Instale as dependências do projeto:
```yml
npm install
```

## Executar o projeto em ambiente Docker

Inicie o projeto com Docker:
```yml
docker compose up
```

## Testes dos recursos da API

Na raiz do projeto, abra o arquivo `api.http` para testar os recursos de GET e POST.

Para testar as demais fincionalidades da API, acesse a documentação swagger do projeto em [localhost:3000/api](http://localhost:3000/api).