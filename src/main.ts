import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SwaggerTheme } from 'swagger-themes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('Imersao 14 - Desafio Nest.js - Fase 1')
    .setVersion('1.0')
    .addTag('Hello', 'Hello World.')
    .addTag('Routes', 'Recursos relacionados às rotas.')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const theme = new SwaggerTheme('v3');
  const options = {
    explorer: true,
    customCss: theme.getBuffer('dark')
  };
  SwaggerModule.setup('api', app, document, options);


  await app.listen(process.env.API_PORT || 3000);
  console.log(`API em execução: ${await app.getUrl()}`);
  console.log(`Documentação swagger do projeto: ${await app.getUrl()}/api`);
}
bootstrap();
