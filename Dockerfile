#intrim build image
#FROM node:12.13-slim
FROM node:16-slim
ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/

# Copying source files
COPY . /usr/src/app

RUN npm install
# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "start"
