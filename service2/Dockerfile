# start from basic node image, alpine is the less heavy node image
FROM node:18

# set the wokring directory
WORKDIR /service2

# copy the package.json file
COPY package*.json ./

# install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 8200

# start the api
CMD ["npm", "start"]