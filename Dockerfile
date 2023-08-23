FROM node:20-slim

RUN apt update && apt install -y openssl procps

WORKDIR /home/node/app

USER node

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "dev"]