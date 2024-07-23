FROM alpine:3.19

ENV NODE_VERSION 22.5.1

WORKDIR /app

COPY src ./app/src

COPY package.json .

COPY tsconfig.json .

RUN yarn install 

EXPOSE 4000

CMD [ "yarn","run", "start" ]