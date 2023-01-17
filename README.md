*******
<div id='indice'/> 

## Índice

1. [Informações importantes sobre o projeto](#infoImportante)
2. [Passo a passo para rodar aplicação](#rodarAplicacao)
3. [Autenticar na aplicação](#autenticatAplicacao)
4. [Deploy image GCR](#deployGCR)
5. [Deploy cloud](#deploycloudrun)
6. [Modelagem de dados](#modelagem) 
7. [Informações do deploy](#infoDeploy)
8. [Agradecimentos](#agradecimento)
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

<div id='deployGCR'/>  

## Deploy image GCR
[⬆️ Indice ](#indice)

```bash
# Build image
$ docker build -t gcr.io/castor-consultoria-ltda/desafio-entrevista-nodejs .

# Tagging image
$ docker tag gcr.io/castor-consultoria-ltda/desafio-entrevista-nodejs gcr.io/castor-consultoria-ltda/desafio-entrevista-nodejs:latest

# Push image to GCR
$ docker push gcr.io/castor-consultoria-ltda/desafio-entrevista-nodejs:latest
```

<div id='deploycloudrun'/>  

## Deploy cloud
```bash
# Use cloud build for build image, registry container for artifact registry and create service in cloud run automatic
$ gcloud run deploy
```

<div id='modelagem'/>  

## Modelagem
[⬆️ Indice ](#indice)
![](https://i.imgur.com/DWChF6h.png)


<div id='infoDeploy'/>

## Informações do deploy
[⬆️ Indice ](#indice)

O deploy foi feito utilizando Cloud Deploy, Cloud Registry e Cloud Actefectory (este ultimo é atualização do cloud registry)

Para acessar o site basta clicar no link. [API Produção](https://desafio-entrevista-nodejs-bvrsnczorq-uc.a.run.app/swagger)

Para melhor dinamizar o teste disponibilizei um banco SQL na Google Cloud, ou seja o sistema esta funcionando todo em cloud da google.

Caso seja necessário verificar algo no banco de dados os acessos são:

```
HOST = 34.133.161.185
USER = root
PASSWORD = E#uO4@P4.\9LfnCr
BD = desafio-entrevista-nodejs
```

<div id='agradecimento'/>

## Agradecimentos
[⬆️ Indice ](#indice)

Gostaria de agradecer pela oportunidade de participar do teste, para mim foi importante para relembrar alguns pontos que já trabalhei bastante no passado mas a tempos não mexia como (google cloud) atualmente tenho trabalhado mais com AWS e Azure.
 
Tentei fazer tudo com muito carinho e dedicando o máximo para sair um trabalho bem feito e que teria possibilidade de ir para produção.
 
Queria ter feito uma integração CI e CD utilizando GitHub Actions porque em meu ponto de vista faltava essa parte para concluir todo processo de desenvolvimento.
 
Enfim, mais uma vez muito obrigado pela oportunidade, e aguardo um retorno (espero que positivo) e será um prazer atuar junto com vocês.
<br>
<br>

Atenciosamente

Renan Rodrigues Moraes <br>
(31) 99563-7020 <br>
renan.desenvolvimento@gmail.com