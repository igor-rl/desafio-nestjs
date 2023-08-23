FROM node:20-slim

RUN apt update && apt install -y openssl procps

WORKDIR /home/node/app

COPY package*.json ./
RUN npm install

RUN npm install -g @nestjs/cli@10.0.0

COPY . .

USER node

EXPOSE 3000

ENV PORT 3000
