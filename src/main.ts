import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './utils/env-validator';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Avansoft - Teste Técnico')
    .setDescription('API - Teste Nivel Junior')
    .setVersion('1.0')
    .addTag('Teste')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(env.PORT);
}

bootstrap()
  .then(() => {
    console.log(
      `[TESTE TÉCNICO]\n` +
        `Servidor rodando em: http://localhost:${env.PORT}\n` +
        `Documentação Swagger rodando em: http://localhost:${env.PORT}/api`,
    );
  })
  .catch((error) => {
    console.error('Erro ao iniciar o servidor:', error);
    process.exit(1);
  });
