FROM node:latest

WORKDIR /chat-app/frontend

EXPOSE 5173

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]