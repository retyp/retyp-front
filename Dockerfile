# Node LTS 12.13.1 on alpine
FROM node:12.13.1-alpine
LABEL maintainer="Retyp"

# creates a directory for the app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install the app
COPY package*.json ./
RUN npm install

# bundle all source code
COPY . . 
