FROM node:18.12.0-alpine

RUN apk update && apk add bash

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "wait"]
