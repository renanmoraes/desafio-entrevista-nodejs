![Dr Consulta](https://drconsulta.com/_next/image?url=%2Fimages%2FLogo-Dr-Consulta-Branco.png&w=128&q=100 "DrConsulta")

*"Salvar vidas e cuidar das pessoas porque elas não podem esperar nas filas da saúde."*
Conheça: www.drconsulta.com

## Informações importantes sobre o projeto
O projeto foi construido com base no framework NestJS além disso foi utilizado algumas bibliotecas para facilitar e dinamizar o desenvolvimento.

Para configurações de variaveis de ambiente utilei o [Configuration](https://docs.nestjs.com/techniques/configuration#configuration) Ele é utilizado para fazer a leitura de um arquivo de configuração na raiz do projeto no formator de .env ou yaml (o escolhido para este projeto foi .env)

Para conexão com banco foi utilizado o [TypeORM](https://docs.nestjs.com/recipes/sql-typeorm) conectando em um banco MySQL.

Para documentação da aplicação foi utilizado o [Swagger](https://docs.nestjs.com/openapi/introduction), todos os teste do projeto foi utilizado o swagger para construir as requisições ou seja não será necessário utilizar Postman nem outro deste tipo. Para você utilizar o swagger basta navegar para http://localhost:[porta]/swagger onde [porta] é a porta que colocou no arquivo .env

## Objetivo
O teste é destinado para vaga de Desenvolvedor Back-end entendo como o candidato efetuou a solução e o raciocinio de criação

## Project - API
Criar uma API REST para gerenciar um estacionamento de carros e motos.

#### Stack tecnológica
- NestJS
- TypeOrm
- Mysql
- Swagger

#### Cadastro de estabelecimento
Criar um cadastro da empresa com os seguintes campos:
- Nome;
- CNPJ;
- Endereço;
- Telefone;
- Quantidade de vagas para motos;
- Quantidade de vagas para carros.
- 
**Todos** os campos são de preenchimento obrigatório.

#### Cadastro de veículos
Criar um cadastro de veículos com os seguintes campos:
- Marca;
- Modelo;
- Cor;
- Placa;
- Tipo.
- 
**Todos** os campos são de preenchimento obrigatório.

#### Funcionalidades
- **Estabelecimento:** CRUD;
- **Veículos:** CRUD;
- **Controle de entrada e saída de veículos.**

#### Requisitos
- Controle JWT via Handshake
- Modelagem de dados;
- O retorno deverá ser em formato JSON;
- Requisições GET, POST, PUT ou DELETE, conforme a melhor prática;
- A persistência dos dados deverá ser em banco *relacional MYSQL*
- Criar README do projeto descrevendo as tecnologias utilizadas, chamadas dos serviços e configurações necessário para executar a aplicação.
   
#### Ganha mais pontos
- Sumário da quantidade de entrada e saída;
- Sumário da quantidade de entrada e saída de veículos por hora;
- Criação relatórios para visão ao dono do estabelecimento;
- Desenvolver utilizando TDD;

## DevOps (Diferencial)
Efetuar deploy da nossa API no ambiente do Google Cloud Platform utilizando os serviços

#### Serviços do GCP
- Container Registry (Subir a imagem docker)
- Cloud Run

## Submissão
Crie um fork do teste para acompanharmos o seu desenvolvimento através dos seus commits.

## Obrigado!
Agradecemos sua participação no teste. Boa sorte! 😄
