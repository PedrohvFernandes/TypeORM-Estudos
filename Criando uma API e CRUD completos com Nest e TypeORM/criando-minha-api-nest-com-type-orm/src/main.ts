import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './interceptors/transform.interceptor';

// Qualquer config nest que for feita aqui, será aplicada em toda a aplicação
async function bootstrap() {
  // Cria uma instância do módulo principal
  const app = await NestFactory.create(AppModule);

  // Prefixo global para todas as rotas
  app.setGlobalPrefix('/api/v1');
  // Pipe de validação, que valida o corpo da requisição de acordo com o schema/interface/type
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(3333);
}
bootstrap();
