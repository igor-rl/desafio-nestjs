import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bem vindo à api Imersao 14 - Desafio Nest.js - Fase 1.';
  }
}
