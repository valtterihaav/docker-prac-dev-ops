# start from basic node image
FROM node:22-alpine

# set the wokring directory
WORKDIR /app

# copy the package.json file
COPY package.json /app/package.json

# install the dependencies
RUN npm install

# start the api
CMD ["npm", "start"]