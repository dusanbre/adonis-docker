FROM node:lts-alpine as dev

WORKDIR /home/node/app

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]

EXPOSE 3333