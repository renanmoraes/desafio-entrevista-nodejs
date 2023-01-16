*******
<div id='indice'/> 

## Índice

1. [Informações importantes sobre o projeto](#infoImportante)
2. [Passo a passo para rodar aplicação](#rodarAplicacao)
3. [Autenticar na aplicação](#autenticatAplicacao)
4. [Modelagem de dados](#modelagem) 
*******


<div id='infoImportante'/>  

## Informações importantes sobre o projeto
O projeto foi construido com base no framework NestJS além disso foi utilizado algumas bibliotecas para facilitar e dinamizar o desenvolvimento.

Para configurações de variaveis de ambiente utilei o [Configuration](https://docs.nestjs.com/techniques/configuration#configuration) Ele é utilizado para fazer a leitura de um arquivo de configuração na raiz do projeto no formator de .env ou yaml (o escolhido para este projeto foi .env)

Para conexão com banco foi utilizado o [TypeORM](https://docs.nestjs.com/recipes/sql-typeorm) conectando em um banco MySQL.

Para documentação da aplicação foi utilizado o [Swagger](https://docs.nestjs.com/openapi/introduction), todos os teste do projeto foi utilizado o swagger para construir as requisições ou seja não será necessário utilizar Postman nem outro deste tipo. Para você utilizar o swagger basta navegar para http://localhost:[porta]/swagger onde [porta] é a porta que colocou no arquivo .env

<div id='rodarAplicacao'/>  

## Passo a passo para rodar aplicação

[⬆️ Indice ](#indice)
1. Executar o comando para instalar as dependencias (melhor versão para instalar no arquivo .npmrc)
    > `npm i`

2. Criar um arquivo .env na raiz do projeto (existe um .env-example para ver as variaveis necessarias para rodar o projeto).

    > `cp .env-example .env`

3. Substituir os exemplos pelos valores reais de seu local

4. Rodar o comando para da start na aplicação localmente

    > `npm run start:dev`

<div id='autenticatAplicacao'/>  

## Autenticar na aplicação
[⬆️ Indice ](#indice)
1. Faça o cadastro de seu usuario na rota /user
2. Depois efetue o login utilizando a rota /authorization/login

    2.1. Com o retorno do login adicione no headers da request o token `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
3. Continue os testes autenticado.

## Modelagem
[⬆️ Indice ](#indice)
![](https://i.imgur.com/DWChF6h.png)