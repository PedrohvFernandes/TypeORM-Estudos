# Lista das aulas vistas para estudar

## Version da lib TypeOrm usadas nos estudos: @0.3.7 e @0.3.12

<img src="https://github.com/typeorm/typeorm/raw/master/resources/logo_big.png">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

## Tecnologia principal

- [TypeOrm - Mapeador de objeto relacional](https://orkhan.gitbook.io/typeorm/docs/relational-query-builder) [Documentação](https://typeorm.io)
- [TypeOrm - Mapeador de objeto relacional](https://typeorm.biunav.com/en/using-ormconfig.html#using-ormconfig-js)
- [Documentação](https://typeorm.io)

## Tecnologias e ferramentes utilizadas a parte em todas as aulas:

- Express
- Node
- Vscode
- Insomnia REST
- TypeScript
- Beekeeper Studio Ultimate para visualizar as tabelas do BD com mais facilidade
- [PostgreSql SGBD PgAdmin 15.2](https://www.postgresql.org/download/windows/) para abrir/subir a porta do database server e criação do BD do zero

## Tecnologias e ferramentes utilizadas a parte na aula 3:

- Comando npx @nestjs/cli new nome-do-projeto (com npx pra não precisar instalar o cli do nest globalmente na maquina) ou npm i -g @nest/cli > nest new nome-do-projeto (Globalmente)
- [Nest](https://nestjs.com) no lugar do Express
  - [Nest Microservice](https://docs.nestjs.com/microservices/basics)
  - [Nest Microservice Kafka](https://docs.nestjs.com/microservices/kafka)
  - [Nest interceptor](https://docs.nestjs.com/interceptors)
- [Arquitetura MVC](https://blog.matheuscastiglioni.com.br/arquitetura-mvc/)
- [Sqlite3](https://www.sqlite.org/index.html)
- [TypeORM com NEST](https://docs.nestjs.com/techniques/database)

## Tecnologias e ferramentes utilizadas a parte na aula 4:

- Comando npx para o TypeOrm realizar o projeto pre pronto: [npx](https://blog.rocketseat.com.br/conhecendo-o-npx-executor-de-pacote-do-npm/) typeorm init --database postgres OU npx typeorm init --name project --database postgres

## Tecnologias e ferramentes utilizadas no projeto que fiz sozinho:

- Babel para o build, em vez do tsc do typescript
- [jest](https://jestjs.io) para testes
- [ts-jest](https://kulshekhar.github.io/ts-jest)
- ts-node quanto tsx para rodar o projeto. ts-node para o typeOrm e o tsx para rodar .ts no node
- Principio utilizado do SOLID
  - Princípio da inversão de dependência
- M(Interface)VC
- Camada service, a onde toda a regra de negócio fica nela, o controller fica so por conta para devolver para a view os dados retornados da service, que a mesma esta usando um repo real e um Mockup.

### Nome da pasta e o video relacionada a ela:

- 1- APIREST-Node.js-TypeScript-TypeORM
  [API REST com Node.js e TypeScript | TypeORM [Atualizado]Guido Cerqueira](https://www.youtube.com/watch?v=j8cm2C5-xn8)

- 2- CRUDComNode.JSExpressTypeORMPostgreSQLCodedrops113
  [CRUD com Node.JS, Express, TypeORM e PostgreSQL - #code/drops 113 Rocketseat](https://www.youtube.com/watch?v=9AO2hZJsHrs&list=PLYCbr20ulfkJ4rv9MPkUQ858q7ajqWu5Y&index=9&t=1348s)

- 3- Criando uma API e CRUD completos com Nest e TypeORM
  [Criando uma API e CRUD completos com Nest e TypeORM Matheus Castiglioni](https://www.youtube.com/watch?v=wLr23WHZQhA&list=PLYCbr20ulfkJ4rv9MPkUQ858q7ajqWu5Y&index=10&t=1055s)

- 4- Criando um Projeto do Zero com TypeORM, NodeJS, Express e MySQL
  [Criando um Projeto do Zero com TypeORM, NodeJS, Express e MySQL TecEdu4All](https://www.youtube.com/watch?v=c74zNWoCJiA&list=PLYCbr20ulfkJ4rv9MPkUQ858q7ajqWu5Y&index=14&t=2038s)

- 5- Resolvi fazer um projeto sozinho, com o que aprendi nas aulas anteriores, junto com inversão de dependência, Build com Babel, Jest end two end(e2e), ts-jest, ts-node, typescript, express, pg, tsx etc. Obs: nesse projeto tem mais comentarios nos demais, mas decidi deixar esse mais comentado, para ficar mais fácil de entender o que foi feito, apesar de que ja conhecia a maioria das coisas que utilizei, mas foi bom relembrar e praticar.
  [CRUDComNodeJsInversaoDeDependencia](https://www.youtube.com/watch?v=c74zNWoCJiA&list=PLYCbr20ulfkJ4rv9MPkUQ858q7ajqWu5Y&index=14&t=2038s)
