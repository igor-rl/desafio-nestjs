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


## Instalação do projeto

Antes de iniciar os testes verifique se as pastas `node_module` está presentes na raiz dos projetos `/frontend` e `/backend`. Caso contrário, execute o comando para criar instalar as dependências:

```yml
cd backend && npm install && cd .. && cd frontend && npm install && cd ..
```

## Testes com Docker

Para criar os containers do projeto, execute o comando:

```yml
docker compose up
```

Acesse o frontend em [http://localhost:7000/](http://localhost:7000/).

A documentação swagger do projeto backend estará disponível em [http://localhost:7001/api](http://localhost:7001/api).

Para acessar o banco de dados postgres de desenvolvimento, utilize as seguintes configurações:

```yml
Tipo de rede: PostgresSQL\(TCP\IP)
Library: libpq-10.dll
Servidor ip: 127.0.0.1
Senha: pgpass
Porta: 7002
Banco de dados: loja-virtual
```

## Testes com kubernets

Certifique-se de que a pasta dist existe na raiz do projeto `frontend`. Caso não exista, gere a imagem build da aplicação com o comando `cd frontend && ng build`.

Crie a imagem build do projeto:

```yml
docker build -t nome_usuario_docker/lv-front:0.0.0 -f ./frontend/Dockerfile.dev frontend/
```

Disponibilize a imagem no Docker Hub:

```yml
docker push nome_usuario_docker/lv-front:0.0.0
```

Inicie o ambiente do minikub:

```yml
minikube start
```

Aplique os manifestos do projeto:

```yml
kubectl apply -f kbs/desenvolvimento/frontend
```

Para acompanhar os logs dos pods em tempo real, execute `kubectl get pod --watch`. Execute o comando `kubectl port-forward pod/pod_name 7000:8080` para definir uma porta local para acessar o seu projeto. Tudo pronto! Acesse o projeto em [http://localhost:8000/](http://localhost:8000/).

## FRONTEND

### Classes

Essa aplicação usa o Bootstrap. Mas quando sugiu a necessidade de criar novas classes, elas foram ser geradas com uma sigla inicial `tp` (tema personalizado). Isso evita que as novas classes sobreponham as classes do bootstrap.

### Temas

A modificação dinâmica dos temas da aplicação se dá com a manipulação de algumas classes principais.
Todos os temas da aplicação são carregados de `assets/themes` pelo `theme.service.ts`. O tema padrão da aplicação é definido pela pré definição das configurações do empresário que é importado pelo endpoint `api/temas`. Mas o usuario pode sobrepor o tema padrão caso selecione o tema escuro nas definições do usuario.

```
/loja-virtual
├── ...
└── /frontend
    ├── ...
    └── /src/
        ├── ...
        ├── /app
        |   ├── ...
        |   └── /core
        |       ├── ...
        |       └── /services
        |           ├── ...
        |           └── /theme.service.ts  (Código Responsável por carregar os temas da aplicação)
        |
        └── /assets
            ├── ...
            └── /themes                    (Temas da aplicação)
                ├── light.css
                ├── dark.css
                ├── abacate.css
                ├── ameixa.css
                ├── banana.css
                ├── blueberry.css
                ├── morango.css
                └── tangerina.css
```

Para adicionar ou modificar temas, você pode manipular os arquivos em `assets/themes/`. A lista de temas disponíveis por padrão são `light` e `dark`.
Quando o usuario escolhe a configuração light, o tema predominante da aplicação será o que foi definido no painel pelo administrador do sistema. Elas são:

```
light
dark
abacate
ameixa
banana
blueberry
morango
tangerina
```

Todas as classes - exceto a dark - herdam as classes de light. Elas modificam apenas algumas classes chave para alterar o layout do app dinamicamente. Para fazer o teste de modificação das cores de layout, precione `F11` no seu teclado para abrir as ferramentas de desenvolvedor. Depois, acesse a guia `Application`. Em `Local Storage` adicione a key "theme" com o valor de uma das classes listadas acima. Para ver a modificação do layout de acordo com o tema escolhido, precione `F5`.

### Proxima etapa

> Criar um menu para ver o carrinho de compras, informações básicas da loja e as informações do usuario autenticado
