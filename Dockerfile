FROM node:lts-alpine as dev

WORKDIR /home/node/app

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]

EXPOSE 3333

FROM node:lts-alpine as production

WORKDIR /home/node/app

COPY . .

RUN npm install && npm run build

CMD ["npm", "run", "start"]

EXPOSE 3333