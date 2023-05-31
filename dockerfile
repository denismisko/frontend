FROM node:lts-alpine AS builder

WORKDIR /app

COPY . .

COPY package*.json ./

RUN npm install -g @angular-devkit/schematics-cli

RUN npm install -g @angular/cli

RUN apk add --no-cache python3 make g++

RUN npm install --arch=arm64 node-sass

RUN npm install

RUN ng build

CMD ["npm", "start"]
