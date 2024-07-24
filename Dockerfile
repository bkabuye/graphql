FROM alpine:latest

ENV NODE_VERSION=production

# install yarn 
RUN set -eux \
    & apk add \
        --no-cache \
        yarn

# set directory
WORKDIR /app

# copy package.json, package-lock.json and yarn.lock over to directory
COPY package*.json yarn.lock ./

# install all dependencies via yarn command
RUN yarn install 

# Bundle app source
COPY . .

# Expose port
EXPOSE 4000

# start command 
CMD [ "yarn", "start" ]