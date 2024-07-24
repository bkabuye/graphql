FROM alpine:latest

ENV NODE_VERSION=development

# install yarn 
RUN apk --no-cache add nodejs yarn --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community

WORKDIR /app

# copy package.json and package-lock.json over to directory
COPY package*.json ./

COPY yarn.lock ./

# install all dependencies via yarn command
RUN yarn install 

# Bundle app source
COPY . .

# Expose port
EXPOSE 4000

# start command 
CMD [ "yarn", "start" ]