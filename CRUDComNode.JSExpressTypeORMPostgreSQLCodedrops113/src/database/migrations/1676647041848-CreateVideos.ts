import { MigrationInterface, QueryRunner, Table } from 'typeorm'

// Migration criada vazia e alterada manualmente
export class CreateVideos1676647041848 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'videos',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar',
            isUnique: true
          },
          {
            name: 'description',
            type: 'varchar'
          },
          {
            // Essa coluna vai referenciar a tabela de categorias. Um FK
            name: 'category_id',
            type: 'uuid'
          },
          {
            name: 'duration',
            type: 'numeric'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'fk_videos_categories',
            columnNames: ['category_id'],
            referencedTableName: 'categories',
            referencedColumnNames: ['id']
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('videos')
  }
}
