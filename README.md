## Escopo

Aplicação para adicionar, alterar, listar e excluir “usuários”.

## Tecnologias

- Node
- Express
- Nodemon
- Sequelize
- Mysql

## Como rodar ?

```bash

# Clone o repositorio
$ git clone https://github.com/gmorae/api-sequelize.git

# Vá até sua pasta
$ cd api-sequelize

# Rodar as migrations
$ npx sequelize-cli db:migrate

# Install Dependencies
$ yarn ou npm i

# Run Aplication
$ yarn start ou npm start
```

## API

A API foi criada com os seguintes endpoints
* Get - `locahost:3333/users`
* Get - `localhost:3333/users/id`
* Post - `localhost:3333/users`
* Put - `localhost:3333/users/id`
* Delete - `localhost:3333/users/id`

## Dúvidas
Caso há alguma dúvida em relação a este repositório, envie para gmmartins06@gmail.com
