# start from basic node image, alpine is the less heavy node image
FROM node:22-alpine

# set the wokring directory
WORKDIR /service-2

# copy the package.json file
COPY package.json /app/package.json

# install the dependencies
RUN npm install

# Expose the port
EXPOSE 8200

# start the api
CMD ["npm", "start"]