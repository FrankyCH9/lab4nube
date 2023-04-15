FROM node:13.6.0

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 9000

CMD ["node", "server.js"]