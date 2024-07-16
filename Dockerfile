FROM node:lts-alpine as dev

WORKDIR /home/node/app

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]

EXPOSE 3333

FROM node:lts-alpine as production

# ARG TZ=UTC
# ARG LOG_LEVEL=info
# ARG APP_KEY=JUS-tEsDg-DXBbmMHgFuJ4-zmoabFUDF
# ARG NODE_ENV=development
# ARG SESSION_DRIVER=file
# ARG DB_HOST=db
# ARG DB_PORT=5432
# ARG DB_USER=postgres
# ARG DB_PASSWORD=postgres
# ARG DB_DATABASE=adonis_docker

WORKDIR /home/node/app

COPY . .

RUN npm install && npm run build

CMD ["npm", "run", "start"]

EXPOSE 3333