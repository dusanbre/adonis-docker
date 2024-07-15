FROM node:lts-alpine

WORKDIR /home/node/app

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]

EXPOSE 3333