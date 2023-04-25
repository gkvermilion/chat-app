FROM node:latest

WORKDIR /chat-app/backend

EXPOSE 5001

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]