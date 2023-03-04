import { MigrationInterface, QueryRunner, Table } from 'typeorm'

// Apos npm typeorm:create -n NewMigration, ou seja uma migration vazia, sem alteração pro banco, depois alterando diretamente na migration, colocando os "comandos/alteração" manualmente, em vez de criar uma entidade categories e depois rodar o npm run typeorm:generate para ele gerar uma migration automaticamente com os "comandos" para criar a tabela categories no banco de dados
export class CreateCategories1676641511649 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Cria a tabela/entidade/objeto categories no BD
    await queryRunner.createTable(
      new Table({
        name: 'categories',
        columns: [
          {
            name: 'id',
            // Gerador de id unico. Obs: pode deixar com o bd para que ele gere automaticamente e unico
            type: 'uuid',
            // Chave primaria
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar',
            // Valor unico
            isUnique: true
          },
          {
            name: 'description',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categories')
  }
}
