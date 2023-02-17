import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Subject } from './entities/Subject'
import { Room } from './entities/Room'
import { Video } from './entities/Video'
import { default1676476582901 } from './migrations/1676476582901-default'

const PORT = process.env.DB_PORT as number | undefined

// Arquivo de configuração do TypeORM
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true, // --> usar somente em hambiente de dev, porque ela pode limpar a tabela do banco
  logging: true,

  // __Diraname é uma variável global que retorna o caminho do arquivo atual. _dirname é uma variável de ambiente que informa o caminho absoluto do diretório que contém o arquivo em execução no momento. Nesse caso é o database
  // entities: [`${__dirname}/**/entities/*.{ts,js}`], //  Version typeOrm --> 0.3.7
  // ou
  // entities: [`./src/database/entities/*.{ts,js}`], // Version typeOrm --> 0.3.7

  // migrations: [`${__dirname}/**/migrations/*.{ts,js}`] // Version typeOrm --> 0.3.7

  entities: [Room, Video, Subject], // Version typeOrm --> 0.3.12 and 0.3.7
  migrations: [default1676476582901] // Version typeOrm --> 0.3.12 and 0.3.7

  //"migration:generate": "typeorm-ts-node-commonjs -d ./src/database/data-source.ts migration:generate ./src/database/migrations/default" --> aqui é o caminho onde será gerado o arquivo de migração, de acordo com o que ta no arquivo de configuração do typeorm e de acordo com as entities criadas ou alteradas, em entities.

  // "migration:run": "typeorm-ts-node-commonjs -d ./src/database/data-source.ts migration:run" --> aqui é o caminho onde será executado o arquivo de migração, de acordo com o que ta no arquivo de configuração do typeorm, em migrations. A migration que será executada
})
