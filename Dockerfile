FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm","run","start"]