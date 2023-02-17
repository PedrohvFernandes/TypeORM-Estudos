import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './modules/person.module';
import { PersonModel } from './models/person.model';

@Module({
  imports: [
    PersonModule,
    // Config do TypeORM, em vez de fazer o data-source.ts
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db.sql',
      synchronize: true,
      // entities: ['dist/**/*.model.js'],
      entities: [PersonModel],
    }),
  ],
})
export class AppModule {}
