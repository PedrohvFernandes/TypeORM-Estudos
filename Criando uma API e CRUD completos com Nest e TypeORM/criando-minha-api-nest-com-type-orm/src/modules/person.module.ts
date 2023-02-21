import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { PersonController } from 'src/controllers/person.controller';
import { PersonModel } from 'src/models/person.model';

// Poderia colocar o controller direto do app.modules.ts, mas pra separar as coisas, criamos um modulo somente pra pessoa, dessa forma conseguimos reutilizar esse modulo/contexto em outros projetos/serviços/microsserviços
@Module({
  // Importamos o TypeOrmModule.forFeature([PersonModel]) para que possamos usar o repository da entidade Person.model no controller
  imports: [TypeOrmModule.forFeature([PersonModel])],
  controllers: [PersonController],
})
export class PersonModule {}
